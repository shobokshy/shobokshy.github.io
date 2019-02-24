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
			height: '100vh'
		}}>
			{props.children}
		</div>
		<Global
			styles={{
				'html': {
					fontFamily: 'Inter, sans-serif'
				},
				'body': {
					color: '#333',
					boxSizing: 'border-box',
					margin: 0,
					padding: 0
				},
				'h1': {
					fontSize: '40px',
					letterSpacing: '-0.022em',
					lineHeight: '56px',
					fontWeight: 800
				}
			}}
		/>
	</React.Fragment>
)
  
export default Layout