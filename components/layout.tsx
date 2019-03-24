/** @jsx jsx */ import { jsx } from '@emotion/core'
import '../static/fonts/inter.css';
import React from 'react';

interface ColumnProps {
	width?: string,
	gridColumnStart?: number
	css?: object
}


export const Column: React.FunctionComponent<ColumnProps> = props => (
	<div css={{
		display: 'flex',
		flexWrap: 'wrap',
		width: props.width,
		gridColumnStart: props.gridColumnStart,
		...props.css
	}}>
    	{props.children}
  	</div>
)

const Layout: React.FunctionComponent = props => (
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
)
  
export default Layout