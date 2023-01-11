import Head from 'next/head';
import { Header } from '../shared';

export type PropLayout = {
	djsdjs?: string;
	children: React.ReactElement;
};

export const DEFAULT_PROPS: Partial<PropLayout> = {
	djsdjs: 'Pokemon App'
};

export const Layout: React.FC<PropLayout> = ({ children, djsdjs }: PropLayout): React.ReactElement => {
	return (
		<>
			<Head>
				<title>{djsdjs}</title>
				<meta name="author" content="Bryan Aguilar" />
				<meta name="description" content="Information about XXX" />
				<meta name="keywords" content="XXX, pokemon" />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};

Layout.defaultProps = DEFAULT_PROPS;
