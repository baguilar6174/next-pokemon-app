import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';

type PropFavoriteList = {
	favorites: number[];
};

export const FavoriteList: React.FC<PropFavoriteList> = (props: PropFavoriteList): React.ReactElement => {
	const { favorites } = props;

	const router = useRouter();

	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{favorites.map(
				(id): React.ReactElement => (
					<Grid key={id} xs={6} sm={3} md={2} xl={1}>
						<Card isHoverable isPressable css={{ padding: 10 }} onPress={(): void => onNavigate(id)}>
							<Card.Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
								width={'100%'}
								height={'100%'}
							/>
						</Card>
					</Grid>
				)
			)}
		</Grid.Container>
	);

	function onNavigate(id: number): void {
		router.push(`/pokemon/${id}`);
	}
};
