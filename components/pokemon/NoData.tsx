import { Container, Image, Text } from '@nextui-org/react';

export const NoData: React.FC = (): React.ReactElement => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc(100vh - 100px)',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'center'
			}}
		>
			<Text h1>No favorites</Text>
			<Image
				src="/pokemon.svg"
				width={250}
				height={250}
				alt="Pokemon"
				css={{
					opacity: 0.1
				}}
			/>
		</Container>
	);
};
