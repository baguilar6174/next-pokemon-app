import { Button, Card, Container, Grid, Image, Table, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { Layout } from '../../components';
import { PokemonResponse, PokemonsResponse } from '../../interfaces';
import { pokeApi } from '../../services';
import { persistFavorites } from '../../utils';

export type PropDetailPageByName = {
	pokemon: PokemonResponse;
};

const DetailPageByName: React.FC<PropDetailPageByName> = (props: PropDetailPageByName): React.ReactElement => {
	const { pokemon } = props;

	const [isInFavorites, setIsInFavorites] = useState<boolean>(persistFavorites.existInFavorites(pokemon.id));

	return (
		<Layout headTitle={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || '/favicon.svg'}
								alt={pokemon.name}
								width="100%"
								height="250px"
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button color="gradient" ghost={!isInFavorites} onPress={onToggleFavorite}>
								{isInFavorites ? 'Remove from favorites' : 'Save on favorites'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container display="flex" direction="row">
								<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
							</Container>
							<Table aria-label="Pokemon stats">
								<Table.Header>
									<Table.Column>Experience</Table.Column>
									<Table.Column>Height</Table.Column>
									<Table.Column>Weight</Table.Column>
									<Table.Column>Order</Table.Column>
								</Table.Header>
								<Table.Body>
									<Table.Row>
										<Table.Cell>{pokemon.base_experience}</Table.Cell>
										<Table.Cell>{pokemon.height}</Table.Cell>
										<Table.Cell>{pokemon.weight}</Table.Cell>
										<Table.Cell>{pokemon.order}</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);

	function onToggleFavorite(): void {
		persistFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const {
		data: { results }
	} = await pokeApi.get<PokemonsResponse>(`/pokemon?limit=20`);

	const paths = results.map((pokemon) => ({
		params: {
			name: pokemon.name
		}
	}));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };
	const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${name}`);
	return {
		props: {
			pokemon: data
		}
	};
};

export default DetailPageByName;
