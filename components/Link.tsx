/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import LinkWrapper from 'next/link';

interface LinkProps {
	href: string;
	underline?: boolean;
	icon?: React.ReactNode;
	target?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
	return (
		<a
			css={{
				display: 'inline-block',
				color: '#fff',
				transition: 'color .2s ease-in-out',
				cursor: 'pointer',
				':hover': {
					color: '#666',
				},
				textDecoration: props.underline ? 'underline' : 'none',
				width: 'fit-content',
				lineHeight: 0,
			}}
			target={props.target}
			href={props.href}
		>
			{props.icon && (
				<span
					css={{
						display: 'inline-block',
						verticalAlign: 'middle',
						marginRight: 4,
					}}
				>
					{props.icon}
				</span>
			)}
			<span
				css={{
					display: 'inline-block',
					verticalAlign: 'middle',
				}}
			>
				{props.children}
			</span>
		</a>
	);
};
