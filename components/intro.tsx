/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { StaticBackground } from './StaticBackground';
import { Brand } from './Brand';

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
	const shadowAnimation = keyframes`
		from {
			text-shadow: 0 0 8px #4645a3;
		}
		to {
			text-shadow: 0 0 20px #4645a3;
		}
	`;

	const dash = keyframes`
		to {
			stroke-dashoffset: 0;
		}
	`;

	const fill = keyframes`
		from{
			fill: #4645a3;
			fill-opacity: 0;
		}
		to {
			fill: #4645a3;
			fill-opacity: 1;
		}
	`;

	return (
		<Content>
			<div
				css={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<p css={{ margin: 0 }}>Hi, I'm</p>
				<Brand />
				{/* <h1
					css={{
						margin: 0,
						color: '#4645a3',
						animation: `${shadowAnimation} 3s ease-in-out infinite alternate`,
						//textShadow: '0 0 200px #4645a3',
						background:
							'radial-gradient(at 60% bottom, #706fdc,#4645a3)',
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontFamily: 'SerifGothicStd-Black',
						fontSize: '7.451rem',
						letterSpacing: -5,
						userSelect: 'none',
					}}
				>
					SHOBOKSHY
				</h1> */}
				<h2
					css={{
						margin: 0,
						marginTop: -20,
						fontWeight: 100,
					}}
				>
					A web developer & musician in Brisbane, Australia.
				</h2>
			</div>
			<StaticBackground />
		</Content>
	);
};
