import type { MovieCardProps } from "./types";
import styles from "./styles.module.css";

const MovieCardComponent = ({ movie }: MovieCardProps) => {
	const forametDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className={styles.cardContainer}>
			<div className={styles.headerSection}>
				<h3 className={styles.title}>{movie.title}</h3>
				<div className={styles.episodeId}>Episode {movie.episode_id}</div>
			</div>

			<div className={styles.content}>
				<div className={styles.grid}>
					<div className={styles.row}>
						<span className={styles.label}>Release Date:</span>
						<span className={styles.value}>
							{forametDate(movie.release_date)}
						</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Director:</span>
						<span className={styles.value}>{movie.director}</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Producer:</span>
						<span className={styles.value}>{movie.producer}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCardComponent;
