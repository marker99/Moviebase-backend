import { Router } from "express";
import { getMovieDetails, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../controllers/movieController";

const router = Router();

router.get("/popular", getPopularMovies);
router.get("/now-playing", getNowPlayingMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/upcoming", getUpcomingMovies);
router.get('/movie/:id', getMovieDetails);

export default router;
