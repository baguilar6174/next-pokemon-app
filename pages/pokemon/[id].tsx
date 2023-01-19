import { Button, Card, Container, Grid, Image, Table, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { Layout } from '../../components';
import { PokemonResponse } from '../../interfaces';
import { pokeApi } from '../../services';
import { persistFavorites } from '../../utils';

export type PropDetailPage = {
	pokemon: PokemonResponse;
};

const DetailPage: React.FC<PropDetailPage> = (props: PropDetailPage): React.ReactElement => {
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
	const paths = [...Array(20)].map((_, index) => ({
		params: {
			id: `${index + 1}`
		}
	}));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`);
	return {
		props: {
			pokemon: data
		}
	};
};

export default DetailPage;
