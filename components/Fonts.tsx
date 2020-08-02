/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import React from 'react';
import FontFaceObserver from 'fontfaceobserver';
import '../fonts/Fonts.module.css';

interface FontsProps {}

export const Fonts: React.FC<FontsProps> = (props) => {
	const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);

	React.useEffect(() => {
		const serifGothicStd = new FontFaceObserver('SerifGothicStd-Black');

		Promise.all([serifGothicStd.load()]).then(() => setFontsLoaded(true));
	}, []);

	return (
		<React.Fragment>
			<Global
				styles={{
					html: {
						fontFamily: 'Inter',
						fontSize: '100%',
						lineHeight: 1.6,
						fontWeight: 300,
						backgroundColor: '#000',
					},
					a: {
						fontSize: '1rem',
					},
					h1: {
						fontSize: '3.052rem',
						lineHeight: 1.3,
						fontWeight: 800,
					},
					h2: {
						fontSize: '2.441rem',
						lineHeight: 1.3,
						fontWeight: 500,
					},
					h3: {
						fontSize: '1.953rem',
						fontWeight: 500,
					},
					h4: {
						fontSize: '1.563em',
						fontWeight: 400,
					},
					h5: {
						fontSize: '1.25emm',
						fontWeight: 300,
					},
				}}
			/>
			{fontsLoaded && props.children}
		</React.Fragment>
	);
};
