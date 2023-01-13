export interface PokemonsResponse {
	count: number;
	next?: string;
	previous?: string;
	results: Pokemon[];
}

export interface Pokemon {
	name: string;
	url: string;
	id: number;
	img: string;
}
