import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Pokemon } from '../../interfaces';

export type PropPokemonCard = {
	pokemon: Pokemon;
};

export const PokemonCard: React.FC<PropPokemonCard> = (props: PropPokemonCard): React.ReactElement => {
	const {
		pokemon: { name, img, id }
	} = props;

	const router = useRouter();

	return (
		<Grid xs={12} sm={6} md={4} lg={3} onClick={onNavigate}>
			<Card isHoverable isPressable css={{ w: '100%', h: '300px' }}>
				<Card.Body css={{ p: 0 }}>
					<Card.Image src={img} objectFit="cover" width="100%" height="100%" alt={name} />
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
								{name}
							</Text>
						</Col>
						<Col>
							<Row justify="flex-end">
								<Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }} onPress={onNavigate}>
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
	);

	function onNavigate(): void {
		router.push(`/pokemon/${id}`);
	}
};
