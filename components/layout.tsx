/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import '../static/fonts/inter.css';
import React from 'react';
import Meta from './meta';

interface ColumnProps {
	css?: object
}


export const Column: React.FunctionComponent<ColumnProps> = props => (
	<div css={{
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap',
		...props.css
	}}>
    	{props.children}
  	</div>
)

const Layout: React.FunctionComponent = props => (
	<React.Fragment>
		<Meta />
		<div css={{
			display: 'grid',
			gridTemplateColumns: '40vw auto',
			height: '100vh',
			'@media (max-device-width : 768px)': {
				gridTemplateColumns: '0 auto',
			}
		}}>
			{props.children}
		</div>
		<Global
			styles={{
				'html': {
					fontFamily: 'Inter, sans-serif'
				},
				'body': {
					fontSize: '14px',
					letterSpacing: '-0.006em',
					lineHeight: '20px',
					color: '#333',
					boxSizing: 'border-box',
					margin: 0,
					padding: 0
				},
				'::selection': {
					background: '#6772e5',
					color: 'white'
				},
				'button:focus': {
					outline: 'none'
				},
				'.icon': {
					stroke: 'white',
					transition: 'all .2s ease-in'
				},
				'.icon: hover': {
					stroke: 'black'
				},
				'a': {
					color: '#6772e5',
					textDecoration: 'none'
				},
				'ul': {
					paddingLeft: 0,
					listStylePosition: 'outside'
				},
				'li': {
					margin: '10px 0px'
				},
				'h1': {
					fontSize: '30px',
					letterSpacing: '-0.021em',
					lineHeight: '42px',
					fontWeight: 800
				},
				'h2': {
					fontSize: '24px',
					letterSpacing: '-0.019em',
					lineHeight: '34px',
					fontWeight: 700
				}
			}}
		/>
	</React.Fragment>
)
  
export default Layout