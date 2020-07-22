import React from 'react';
import HeadTag from 'next/head';
interface Head {
	title: string;
}

export const Head: React.FC<Head> = (props) => {
	return (
		<HeadTag>
			<title>{props.title}</title>
			<meta
				content='text/html; charset=UTF-8'
				httpEquiv='content-type'
			></meta>
			<meta
				content='width=device-width, user-scalable=0, maximum-scale=1.0, initial-scale=1.0'
				name='viewport'
			></meta>
		</HeadTag>
	);
};
