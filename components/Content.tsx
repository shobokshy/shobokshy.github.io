/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface ContentProps {}

export const Content: React.FC<ContentProps> = (props) => {
	return (
		<div
			css={{
				height: '100%',
			}}
		>
			{props.children}
		</div>
	);
};
