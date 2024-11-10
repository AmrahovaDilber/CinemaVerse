import React, { createContext, useContext, useEffect, useState } from "react";

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

  const handleFilter: (item: string) => void = (item) => {
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
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
