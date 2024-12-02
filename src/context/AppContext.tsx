import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

const MainContext = createContext();

interface MainContextProviderProps {
  children: React.ReactNode;
}

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);
  const [onTVShows, setOnTVShows] = useState([]);
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
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

  const fetchMoviesOrTVShows = async (
    url: string,
    setState: React.Dispatch<React.SetStateAction<never[]>>
  ) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setState(data.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
    }
  };

  useEffect(() => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    // Fetch Movies
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
      setPopularMovies
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
      setNowPlayingMovies
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
      setUpComingMovies
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
      setTopRatedMovies
    );

    // Fetch TV Shows
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`,
      setPopularTVShows
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`,
      setAiringTodayTVShows
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`,
      setOnTVShows
    );
    fetchMoviesOrTVShows(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`,
      setTopRatedTVShows
    );
  }, []);

  const handleAddWatchList = (id: number) => {
    if (!watchList.includes(id)) {
      const newWatchList = [...watchList, id];
      setWatchList(newWatchList);
      console.log(watchList);
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

  const handleAddFavorites = (id) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    }
  };

  const fetchFavoritesMovies = async () => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    try {
      const moviePromises = favorites.map((id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`).then(
          (res) => res.json()
        )
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
    filteredMovies,
    setFilteredMovies,
    handleFilter,
    handleAddWatchList,
    fetchWatchListMovies,
    watchListMovies,
    userLoggedIn,
    handleAddFavorites,
    favorites,
    favoritesMovies,
    fetchFavoritesMovies,
    query,
    setQuery,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
