import { useEffect, useState } from "react";
import type { CharacterProps, MovieProps } from "../types/types";
import { swApiClient } from "../clients/SWApiClient";

const useCharacter = (url: string) => {
	const [character, setCharacter] = useState<CharacterProps | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		if (!url) {
			setCharacter(null);
			return;
		}

		const fetchCharacter = async () => {
			try {
				setLoading(true);
				const characterData = await swApiClient.getCharacter(url);
				setCharacter(characterData);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchCharacter();
	}, []);

	return { character, loading, error };
};

export default useCharacter;
