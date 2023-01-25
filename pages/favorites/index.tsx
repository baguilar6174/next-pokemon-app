import { useEffect, useState } from 'react';
import { Layout } from '../../components';
import { FavoriteList, NoData } from '../../components/pokemon';
import { persistFavorites } from '../../utils';

const FavoritesPage: React.FC = (): React.ReactElement => {
	const [favorites, setFavorites] = useState<number[]>([]);

	useEffect(() => {
		setFavorites(persistFavorites.getPokemons());
	}, []);

	return (
		<Layout headTitle="Your favorites">{favorites.length ? <FavoriteList favorites={favorites} /> : <NoData />}</Layout>
	);
};

export default FavoritesPage;
