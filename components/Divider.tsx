/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface DividerProps {
	short?: boolean;
}

export const Divider: React.FC<DividerProps> = (props) => {
	return (
		<hr
			css={{
				marginTop: '2em',
				marginBottom: '3em',
				marginLeft: 0,
				borderWidth: 0,
				boxShadow: '0 0 6px #fff',
				borderTop: '4px solid #fff',
				width: props.short ? '60px' : '100%',
				height: 0,
				boxSizing: 'content-box',
				textAlign: 'left',
			}}
		/>
	);
};
