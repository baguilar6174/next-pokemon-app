import { CssBaseline } from '@nextui-org/react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const MyDocument = () => {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

MyDocument.getInitialProps = async (context: DocumentContext) => {
	const initialProps = await Document.getInitialProps(context);

	return {
		...initialProps,
		styles: React.Children.toArray([initialProps.styles, CssBaseline.flush()])
	};
};

export default MyDocument;
