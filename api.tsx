const API_KEY = "f21a6bf3bfe42bde02aa229e67732bb8";
const BASE_URL = "https://api.themoviedb.org/3";

// A helper function to perform API requests using fetch with async/await
const tmdbApi = async (endpoint: string, options = {}) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

// Function to get a new request token
export const getRequestToken = async () => {
  const data = await tmdbApi("/authentication/token/new");
  return data.request_token;
};

// Function to create a session using a request token
export const createSession = async (requestToken: string) => {
  const data = await tmdbApi("/authentication/session/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ request_token: requestToken }),
  });
    
  return data.session_id;
};

export const deleteSession = async (sessionId: string) => {
  try {
    const response = await tmdbApi("/authentication/session", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session_id: sessionId }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete session");
    }
    const data = await response.json();
    console.log("Session deleted:", data);
    return data;
  } catch (error) {
    console.error("Error deleting session:", error);
    throw error;
  }
};

// Function to validate login using username, password, and request token
export const validateLogin = async (
  username: string,
  password: string,
  requestToken: string
) => {
  const data = await tmdbApi("/authentication/token/validate_with_login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      request_token: requestToken,
    }),
  });
  return data.success;
};



// FUNCTION FOR GETTING MOVIE TRAILER
export const getMovieTrailers = async (movieId:number) => {
    const data = await tmdbApi(`/movie/${movieId}/videos`);
   console.log(data)
    return data.results
}

export const fetchTrendingMovies = async () => {
  const data = await tmdbApi('/trending/movie/day')
  return data.results
}
export const fetchTrendingTvShows = async () => {
  const data = await tmdbApi('/trending/tv/day')
  return data.results
}

export const fetchSimilarMovies = async (movie_id:number) => {
  const data = await tmdbApi(`/movie/${movie_id}/similar`)
  console.log(data)
  return data.results
}

export const fetchReviews = async (movie_id:number) => {
  const data = await tmdbApi(`/movie/${movie_id}/reviews`)
  return data.results
}

