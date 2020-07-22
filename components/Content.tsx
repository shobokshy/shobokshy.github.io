/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface ContentProps {}

export const Content: React.FC<ContentProps> = (props) => {
	return (
		<div
			css={{
				height: '100%',
				width: 700,
			}}
		>
			{props.children}
		</div>
	);
};
