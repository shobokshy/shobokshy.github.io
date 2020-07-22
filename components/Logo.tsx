/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
	return (
		<div
			css={{
				width: 'auto',
				display: 'inline-block',
			}}
		>
			<div
				css={{
					backgroundColor: '#fff',
					boxShadow: '0 0 6px #fff',
					transition: 'box-shadow .2s',
					width: 20,
					height: 20,
					':hover': {
						borderRadius: '50%',
						cursor: 'crosshair',
						boxShadow:
							'0 0 6px #fff, -1.5px -1.5px 2px #bab909, 1.5px 1.5px 2px #f00',
					},
				}}
			/>
		</div>
	);
};
