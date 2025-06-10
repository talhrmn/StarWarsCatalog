import { useMemo } from "react";
import useMovie from "../../hooks/useMovie";
import MovieCardComponent from "../MovieCard/MovieCard";
import styles from "./styles.module.css";

const MovieGrid = () => {
	const { movies, loading, error } = useMovie();

	const loadingComponent = <div className={styles.loading}>Loading...</div>;
	const errorComponent = (
		<div className={styles.error}>Error loading movies</div>
	);

	const moviesComponent = useMemo(() => {
		return (
			movies &&
			movies.map((movie) => (
				<MovieCardComponent key={movie.episode_id} movie={movie} />
			))
		);
	}, [movies]);

	return (
		<div className={styles.container}>
			<div className={styles.gridWrapper}>
				{loading ? loadingComponent : error ? errorComponent : moviesComponent}
			</div>
		</div>
	);
};

export default MovieGrid;
