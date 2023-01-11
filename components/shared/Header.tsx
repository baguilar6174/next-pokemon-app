import { Avatar, Button, Link, Navbar } from '@nextui-org/react';
import Image from 'next/image';
/* import { Layout } from "./Layout.js";*/

const collapseItems = [
	'Profile',
	'Dashboard',
	'Activity',
	'Analytics',
	'System',
	'Deployments',
	'My Settings',
	'Team Settings',
	'Help & Feedback',
	'Log Out'
];

export const Header = (): React.ReactElement => {
	return (
		<Navbar isBordered variant="sticky">
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
					<Button auto flat as={Link}>
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
			<Navbar.Collapse disableAnimation>
				{collapseItems.map((item, index) => (
					<Navbar.CollapseItem
						key={item}
						activeColor="warning"
						css={{
							color: index === collapseItems.length - 1 ? '$error' : ''
						}}
						isActive={index === 2}
					>
						<Link
							color="inherit"
							css={{
								minWidth: '100%'
							}}
							href="#"
						>
							{item}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};
