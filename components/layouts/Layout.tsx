import Head from 'next/head';
import { Header } from './Header';

export type PropLayout = {
	headTitle?: string;
	children: React.ReactElement;
};

export const DEFAULT_PROPS: Partial<PropLayout> = {
	headTitle: 'Pokemon App'
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: React.FC<PropLayout> = ({ children, headTitle }: PropLayout): React.ReactElement => {
	return (
		<>
			<Head>
				<title>{headTitle}</title>
				<meta name="author" content="Bryan Aguilar" />
				<meta name="description" content="Information about XXX" />
				<meta name="keywords" content={`${headTitle}, pokemon`} />
				<meta property="og:title" content="Next Poke App" />
				<meta property="og:description" content="App created using pokeapi" />
				<meta property="og:image" content={`${origin}/banner.png`} />
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};

Layout.defaultProps = DEFAULT_PROPS;
