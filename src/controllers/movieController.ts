import { Request, Response } from 'express';
import { fetchMovieDetails, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../services/movieService';
import { Movie } from '../models/Movie';

export const getNowPlayingMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await fetchNowPlayingMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching now playing movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getPopularMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await fetchPopularMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Eror fetching popular movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getTopRatedMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await fetchTopRatedMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching top rated movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUpcomingMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await fetchUpcomingMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching upcoming movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getMovieDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie: Movie = await fetchMovieDetails(Number(req.params.id));
        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
            return;
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error('Error fetching movie details', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};