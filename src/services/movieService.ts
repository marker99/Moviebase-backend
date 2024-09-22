import axios from "axios";
import { Movie } from "../models/Movie";

const baseUrl = "https://api.themoviedb.org/3";

// Get a list of movies that are currently in theatres.
export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching now playing movies", error);
    throw new Error("Failed to fetch now playing movies");
  }
}

// Get a list of movies ordered by popularity.
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    // console.error("Error fetching popular movies", error);
    throw new Error("Failed to fetch popular movies");
  }
};

// Get a list of movies ordered by rating.
export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top rated movies", error);
    throw new Error("Failed to fetch top rated movies");
  }
}

// Get a list of movies that are being released soon.
export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies", error);
    throw new Error("Failed to fetch upcoming movies");
  }
}

// Get details for a specific movie.
export const fetchMovieDetails = async (movieId: number): Promise<Movie> => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw new Error("Failed to fetch movie details");
  }
}
