/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface SectionProps {
	children?: React.ReactNode;
	backgroundColor?: string;
	height?: string | number;
}

export const Section: React.FC<SectionProps> = (props) => {
	return (
		<section
			css={{
				height: props.height,
				maxWidth: 1020,
				margin: '0 auto',
				boxSizing: 'border-box',
				backgroundColor: props.backgroundColor
					? props.backgroundColor
					: 'inherit',
			}}
		>
			{props.children}
		</section>
	);
};

Section.defaultProps = {
	height: '70vh',
};
