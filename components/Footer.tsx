/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { LinkedInIcon } from './icons/LinkedIn';
import { List } from './List';
import { GithubIcon } from './icons/Github';
import { SpotifyIcon } from './icons/Spotify';
import { Logo } from './Logo';
import { Link } from './Link';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<Content>
			<div
				css={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderTop: '2px solid #eaeaea',
					paddingTop: 20,
					paddingBottom: 20,
					marginBottom: '3rem',
				}}
			>
				<div>
					<List direction='horizontal'>
						<List.Item>
							<Link href='https://github.com/shobokshy'>
								<GithubIcon />
							</Link>
						</List.Item>
						<List.Item>
							<Link href='https://www.linkedin.com/in/shobokshy/'>
								<LinkedInIcon />
							</Link>
						</List.Item>
						<List.Item>
							<Link href='spotify:artist:6uOLHynml0akUadw1tXnUf'>
								<SpotifyIcon />
							</Link>
						</List.Item>
						<List.Item
							style={{
								fontSize: '.8rem',
								fontWeight: 200,
							}}
						>
							© 2020 shobokshy.
						</List.Item>
					</List>
				</div>
				<div>
					<Logo />
				</div>
			</div>
		</Content>
	);
};
