import Head from 'next/head';
import { Header } from './Header';

export type PropLayout = {
	headTitle?: string;
	children: React.ReactElement;
};

export const DEFAULT_PROPS: Partial<PropLayout> = {
	headTitle: 'Pokemon App'
};

export const Layout: React.FC<PropLayout> = ({ children, headTitle }: PropLayout): React.ReactElement => {
	return (
		<>
			<Head>
				<title>{headTitle}</title>
				<meta name="author" content="Bryan Aguilar" />
				<meta name="description" content="Information about XXX" />
				<meta name="keywords" content="XXX, pokemon" />
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};

Layout.defaultProps = DEFAULT_PROPS;
