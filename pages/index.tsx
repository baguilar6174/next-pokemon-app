import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { GetStaticProps } from 'next';
import { Layout } from '../components';
import { Pokemon, PokemonsResponse } from '../interfaces';
import { pokeApi } from '../services';

export type PropHome = {
	pokemons: Pokemon[];
};

export default function Home(props: PropHome): React.ReactNode {
	const { pokemons } = props;
	return (
		<Layout headTitle="Pokemons List">
			<Grid.Container gap={4} justify="flex-start">
				{pokemons.map((pokemon) => (
					<Grid xs={12} sm={6} md={4} key={pokemon.id}>
						<Card css={{ w: '100%', h: '300px' }}>
							<Card.Body css={{ p: 0 }}>
								<Card.Image src={pokemon.img} objectFit="cover" width="100%" height="100%" alt={pokemon.name} />
							</Card.Body>
							<Card.Footer
								isBlurred
								css={{
									position: 'absolute',
									bgBlur: '#0f111466',
									borderTop: '$borderWeights$light solid $gray800',
									bottom: 0,
									zIndex: 1
								}}
							>
								<Row align="center">
									<Col>
										<Text color="#d1d1d1" size={20} transform="capitalize">
											{pokemon.name}
										</Text>
									</Col>
									<Col>
										<Row justify="flex-end">
											<Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }}>
												<Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
													Details
												</Text>
											</Button>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>
				))}
			</Grid.Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const {
		data: { results }
	} = await pokeApi.get<PokemonsResponse>(`/pokemon?limit=20`);

	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;

	const pokemons: Pokemon[] = results.map(({ url, name }, index): Pokemon => {
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
