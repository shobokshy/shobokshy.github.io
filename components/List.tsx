/** @jsx jsx */
import { jsx, InterpolationWithTheme } from '@emotion/core';
import React from 'react';
import { Space } from './Space';

type ContentComponent = React.FC<Content>;
type ItemComponent = React.FC<Item>;
type ListComponent = React.FC<List> & {
	Item: ItemComponent;
	Content: ContentComponent;
};

interface List {
	children?:
		| React.ReactElement<ItemComponent>
		| React.ReactElement<ItemComponent>[];
	direction: 'vertical' | 'horizontal';
	spaceSize?: 'small' | 'medium' | 'large' | 'xLarge';
}

const List: ListComponent = (props) => {
	return (
		<ul
			css={{
				listStyleType: 'none',
				margin: 0,
				padding: 0,
				overflow: 'hidden',
				display: 'flex',
				flexDirection:
					props.direction == 'horizontal' ? 'row' : 'column',
				alignItems: 'inherit',
			}}
		>
			<Space direction={props.direction} size={props.spaceSize}>
				{props.children}
			</Space>
		</ul>
	);
};

interface Item {
	children?: React.ReactNode;
	style?: InterpolationWithTheme<any>;
}

const Item: ItemComponent = (props) => {
	return (
		<li
			css={{
				display: 'inline-flex',
				//@ts-ignore
				...props.style,
			}}
		>
			{props.children}
		</li>
	);
};

interface Content {
	title?: string;
	subtitle?: string;
	actions?: React.ReactElement[];
}

const Content: ContentComponent = (props) => {
	return (
		<div>
			<p css={{ margin: 0 }}>
				<span css={{ fontWeight: 'bold' }}>{props.title}</span>
				{props.subtitle && (
					<span css={{ marginLeft: 5, fontWeight: 'lighter' }}>
						{props.subtitle}
					</span>
				)}
			</p>
			{props.children && <p>{props.children}</p>}
			{props.actions && (
				<Space direction='horizontal'>{props.actions}</Space>
			)}
		</div>
	);
};

List.Item = Item;
List.Content = Content;
export { List };
