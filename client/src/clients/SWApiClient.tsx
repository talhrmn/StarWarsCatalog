import type { MovieProps } from "../types/types";

class SWApiClient {
	private readonly baseUrl = "https://swapi.info/api";

	private async fetchData(url: string) {
		try {
			const response = await fetch(url);
			if (!response.ok)
				throw new Error(`Error fetching data ${response.status}`);
			return await response.json();
		} catch (error) {
			console.error(`Failed to fetch data: ${error}`);
			throw error;
		}
	}

	async getMovies() {
		const moviesData = await this.fetchData(`${this.baseUrl}/films/`);
		return moviesData.results.sort(
			(a: MovieProps, b: MovieProps) => a.episode_id - b.episode_id
		);
	}

	async getCharacter(url: string) {
		return this.fetchData(url);
	}
}

export const swApiClient = new SWApiClient();
