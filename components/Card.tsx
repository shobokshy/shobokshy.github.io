/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

type CardComponent = React.FC<CardProps> & {
	Content: ContentComponent;
	Footer: FooterComponent;
};
type ContentComponent = React.FC<ContentProps>;
type FooterComponent = React.FC<FooterProps>;

interface CardProps {}

const Card: CardComponent = (props) => {
	return (
		<div
			css={{
				width: '100%',
				boxSizing: 'border-box',
				borderRadius: 5,
				border: '1px solid #eaeaea',
			}}
		>
			{props.children}
		</div>
	);
};

interface ContentProps {}

const Content: ContentComponent = (props) => {
	return (
		<div
			css={{
				width: '100%',
				padding: '16pt',
			}}
		>
			{props.children}
		</div>
	);
};

interface FooterProps {}

const Footer: FooterComponent = (props) => {
	return (
		<div
			css={{
				display: 'flex',
				boxAlign: 'center',
				alignItems: 'center',
				fontSize: '0.875em',
				borderBottomLeftRadius: 5,
				borderBottomRightRadius: 5,
				padding: '8pt 16pt',
				borderTop: '1px solid #eaeaea',
			}}
		>
			{props.children}
		</div>
	);
};

Card.Content = Content;
Card.Footer = Footer;

export { Card };
