import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';
import { Layout } from '../components';
import { PokemonCard } from '../components/pokemon';
import { Pokemon, PokemonsResponse } from '../interfaces';
import { pokeApi } from '../services';

export type PropHome = {
	pokemons: Pokemon[];
};

export default function Home(props: PropHome): React.ReactNode {
	const { pokemons } = props;
	return (
		<Layout headTitle="Pokemon App">
			<Grid.Container gap={4} justify="flex-start">
				{pokemons.map(
					(pokemon): React.ReactElement => (
						<PokemonCard pokemon={pokemon} key={pokemon.id} />
					)
				)}
			</Grid.Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const {
		data: { results }
	} = await pokeApi.get<PokemonsResponse>(`/pokemon?limit=20`);

	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;

	const pokemons: Pokemon[] = results.map(({ url, name }: Pokemon, index: number): Pokemon => {
		return {
			id: index + 1,
			img: `${imageUrl}${index + 1}.svg`,
			name,
			url
		};
	});

	return {
		props: {
			pokemons
		}
	};
};
