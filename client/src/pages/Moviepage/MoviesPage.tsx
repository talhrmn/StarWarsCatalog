import MovieGrid from "../../components/MovieGrid/MovieGrid";
import styles from "./styles.module.css";

const MoviesPage = () => {
	return (
		<div className={styles.pageContainer}>
			{/* <div className={styles.headerSection}></div>
			<div className={styles.searchSection}></div> */}
			<MovieGrid />
		</div>
	);
};

export default MoviesPage;
