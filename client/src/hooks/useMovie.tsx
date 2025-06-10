import { useEffect, useState } from "react";
import type { MovieProps } from "../types/types";
import { swApiClient } from "../clients/SWApiClient";

const useMovie = () => {
	const [movies, setMovies] = useState<MovieProps[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				setLoading(true);
				const moviesData = await swApiClient.getMovies();
				setMovies(moviesData);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);

	return { movies, loading, error };
};

export default useMovie;
