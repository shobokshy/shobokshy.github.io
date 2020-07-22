/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	shadow?: boolean;
	size?: 'small' | 'default';
}

export const Button: React.FC<ButtonProps> = ({
	shadow,
	size,
	children,
	...buttonProps
}) => {
	const buttonSizeStyle = () => {
		const defaultStyle = {
			width: 'auto',
			padding: '8px 12px',
		};

		switch (size) {
			case 'small':
				return {
					width: 'initial',
					padding: '8px 12px',
				};
			case 'default':
				return defaultStyle;
			default:
				return defaultStyle;
		}
	};

	return (
		<button
			{...buttonProps}
			css={{
				boxSizing: 'border-box',
				display: 'inline-box',
				userSelect: 'none',
				outline: 'none',
				textTransform: 'capitalize',
				justifyContent: 'center',
				textAlign: 'center',
				whiteSpace: 'nowrap',
				transition: 'all 0.2s ease',
				position: 'relative',
				overflow: 'hidden',
				color: '#fff',
				backgroundColor: 'transparent',
				border: '1px solid #eaeaea',
				cursor: 'pointer',
				fontSize: '.8rem',
				boxShadow: shadow ? '0 5px 10px rgba(0, 0, 0, 0.12)' : 'none',
				...buttonSizeStyle(),
				':hover': {
					borderColor: 'black',
					backgroundColor: '#fff',
					color: '#000',
				},
			}}
		>
			{children}
		</button>
	);
};
