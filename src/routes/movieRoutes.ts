import { Router } from "express";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../controllers/movieController";

const router = Router();

router.get("/popular", getPopularMovies);
router.get("/now-playing", getNowPlayingMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/upcoming", getUpcomingMovies);

export default router;
