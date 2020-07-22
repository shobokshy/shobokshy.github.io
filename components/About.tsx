/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { Divider } from './Divider';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
	return (
		<Content>
			<Divider short />
			<h3
				id='about'
				css={{
					scrollMarginTop: 140,
					marginTop: 0,
					marginBottom: '2.5rem',
				}}
			>
				ABOUT
			</h3>
			<p>
				Born in Egypt and now living in Australia, I am interested in UI
				and user/dev experience. I primarily code in Javascript & C#
				doing full stack applications.
			</p>
			<p>
				When I am not coding, I am likely making music on Ableton Live
				or listening to music.
			</p>
		</Content>
	);
};
