import axios, { type AxiosInstance } from "axios";
import type { MovieProps } from "../types/types";

class SWApiClient {
	private apiClient: AxiosInstance;
	private swapiUrl: string;

	constructor() {
		this.swapiUrl = "https://swapi.info/api";
		this.apiClient = axios.create({ baseURL: this.swapiUrl });
	}

	private async fetchData(url: string) {
		try {
			const response = await this.apiClient.get(url);
			if (response.status !== 200)
				throw new Error(`Error fetching data ${response.status}`);
			return response.data;
		} catch (error) {
			console.error(`Failed to fetch data: ${error}`);
			throw error;
		}
	}

	async getMovies() {
		const moviesData = await this.fetchData("/films");
		return moviesData.sort(
			(a: MovieProps, b: MovieProps) => a.episode_id - b.episode_id
		);
	}

	async getCharacter(url: string) {
		return this.fetchData(url);
	}
}

export const swApiClient = new SWApiClient();
