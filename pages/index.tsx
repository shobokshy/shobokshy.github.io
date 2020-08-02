/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { Head } from '../components/Head';
import { Fonts } from '../components/Fonts';
import { Section } from '../components/Section';
import { Intro } from '../components/Intro';

export default () => {
	return (
		<Fonts>
			<Global
				styles={{
					html: {
						scrollBehavior: 'smooth',
					},
					body: {
						backgroundColor: '#000',
						color: '#fff',
						margin: 0,
					},
				}}
			/>
			<Head title='shobokshy' />
			<Section height='100vh'>
				<Intro />
			</Section>
		</Fonts>
	);
};
