import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
  fetchAiringTodayTVShows,
  fetchMovieDetails,
  fetchNowPlayingMovies,
  fetchOnTvShows,
  fetchPopularMovies,
  fetchPopularTvShows,
  fetchTopRatedMoviess,
  fetchTopRatedTvShows,
  fetchUpComingMovies,
} from "../../api";
import notification from "../utils/helper";
import { MainContextType } from "../types/type";


interface MainContextProviderProps {
  children: React.ReactNode;
}


const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);
  const [onTVShows, setOnTVShows] = useState([]);
  const[filteredMovies,setFilteredMovies]=useState([])
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);


  const [watchList, setWatchList] = useState<number[]>([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };
  const handleFilter = (item: string) => {
    if (item === "PopularMovie") {
      setFilteredMovies(popularMovies);
    } else if (item === "Now Playing") {
      setFilteredMovies(nowPlayingMovies);
    } else if (item === "Upcoming") {
      setFilteredMovies(upComingMovies);
    } else if (item === "Top Rated Movies") {
      setFilteredMovies(topRatedMovies);
    } else if (item === "PopularTv") {
      setFilteredMovies(popularTVShows);
    } else if (item === "Airing Today") {
      setFilteredMovies(airingTodayTVShows);
    } else if (item === "On TV") {
      setFilteredMovies(onTVShows);
    } else if (item === "Top Rated Tv") {
      setFilteredMovies(topRatedTVShows);
    } else if (query) {
      setFilteredMovies((filteredMovies) =>
        filteredMovies.filter((movie) =>
          movie.original_title?.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      // Default case: show the full list of movies
      setFilteredMovies([...popularMovies, ...nowPlayingMovies, ...upComingMovies, ...topRatedMovies]);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setPopularMovies(await fetchPopularMovies());
      setNowPlayingMovies(await fetchNowPlayingMovies());
      setUpComingMovies(await fetchUpComingMovies());
      setTopRatedMovies(await fetchTopRatedMoviess());
  
      // Fetch TV Shows
      setPopularTVShows(await fetchPopularTvShows());
      setAiringTodayTVShows(await fetchAiringTodayTVShows());
      setOnTVShows(await fetchOnTvShows());
      setTopRatedTVShows(await fetchTopRatedTvShows());
    }
    fetchMovies()

  }, []);

  const handleAddWatchList = async (id: number) => {
    try {
      const movie = await fetchMovieDetails(id);
      if (!watchList.includes(id)) {
        const newWatchList = [...watchList, id];
        setWatchList(newWatchList);

        if (movie && movie.id === id) {
          notification(
            `${movie.original_title || movie.name} added to watchlist`,
            "success"
          );
        }
      } else {
        notification("This movie is already in your watchlist.", "info");
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      notification(
        "Failed to add the movie to the watchlist. Please try again.",
        "error"
      );
    }
  };

  const fetchWatchListMovies = async () => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    try {
      const moviePromises = watchList.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        ).then((res) => res.json())
      );
      const movies = await Promise.all(moviePromises);
      setWatchListMovies(movies);
    } catch (error) {
      console.error("Error fetching watchlist movies:", error);
    }
  };

  const handleAddFavorites = (id:number) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    }
  };

  const fetchFavoritesMovies = async () => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    try {
      const moviePromises = favorites.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        ).then((res) => res.json())
      );
      const movies = await Promise.all(moviePromises);
      setFavoritesMovies(movies);
    } catch (error) {
      console.error("Error fetching favorites movies:", error);
    }
  };

  const data = {
    popularMovies,
    nowPlayingMovies,
    upComingMovies,
    topRatedMovies,
    popularTVShows,
    airingTodayTVShows,
    onTVShows,
    topRatedTVShows,
    loading,
    currentUser,
    handleFilter,
    handleAddWatchList,
    fetchWatchListMovies,
    watchListMovies,
    userLoggedIn,
    setUserLoggedIn,
    handleAddFavorites,
    favorites,
    favoritesMovies,
    fetchFavoritesMovies,
    query,
    setQuery,
    filteredMovies
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
