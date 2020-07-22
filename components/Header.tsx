/** @jsx jsx */
import { jsx } from '@emotion/core';
import { List } from './List';
import { Logo } from './Logo';
import { Content } from './Content';
import { Button } from './Button';
import { Link } from './Link';

export const Header: React.FC = () => {
	return (
		<header
			css={{
				position: 'fixed',
				top: 0,
				width: '100%',
			}}
		>
			<Content>
				<div
					css={{
						paddingTop: 20,
						paddingBottom: 20,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Logo />
					<nav
						css={{
							alignItems: 'center',
							display: 'flex',
							marginLeft: 'auto',
							flexShrink: 1,
						}}
					>
						<List direction='horizontal'>
							<List.Item>
								<Link href='#about'>About</Link>
							</List.Item>
							<List.Item>
								<Link href='#projects'>Projects</Link>
							</List.Item>
							<List.Item>
								<Link href='#music'>Music</Link>
							</List.Item>
							<List.Item>
								<Button
									onClick={() =>
										window.open(
											'mailto:a.shobokshy@gmail.com',
											'_blank'
										)
									}
									size='small'
								>
									Contact
								</Button>
							</List.Item>
						</List>
					</nav>
				</div>
			</Content>
		</header>
	);
};
