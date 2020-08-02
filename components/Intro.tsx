/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { StaticBackground } from './StaticBackground';
import { Brand } from './Brand';

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
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
				<Brand />
			</div>
			<StaticBackground />
		</Content>
	);
};
