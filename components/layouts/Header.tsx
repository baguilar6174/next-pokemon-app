import { Avatar, Button, Link, Navbar } from '@nextui-org/react';
import Image from 'next/image';

export const Header = (): React.ReactElement => {
	return (
		<Navbar isCompact isBordered variant="sticky">
			<Navbar.Toggle showIn="xs" />
			<Navbar.Brand
				css={{
					'@xs': {
						w: '12%'
					}
				}}
			>
				<Image src="/pokemon.svg" width={100} height={50} alt="logo" />
			</Navbar.Brand>
			<Navbar.Content activeColor="warning" hideIn="xs" variant="highlight">
				<Navbar.Item>
					<Button auto as={Link} bordered color="warning">
						Favorites
					</Button>
				</Navbar.Item>
			</Navbar.Content>
			<Navbar.Content
				css={{
					'@xs': {
						w: '12%',
						jc: 'flex-end'
					}
				}}
			>
				<Navbar.Item>
					<Avatar
						bordered
						as="button"
						color="warning"
						size="md"
						src="https://avatars.githubusercontent.com/u/47910273?v=4"
					/>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
	);
};
