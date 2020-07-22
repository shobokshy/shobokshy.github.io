/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { Header } from '../components/Header';
import { Head } from '../components/Head';
import { Fonts } from '../components/Fonts';
import { Section } from '../components/Section';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Client } from '../prismic';
import Prismic from 'prismic-javascript';
import { InferGetStaticPropsType } from 'next';
import { Tracks } from '../components/Tracks';
import { About } from '../components/About';

export const getStaticProps = async () => {
	const projectData = await Client.query(
		Prismic.Predicates.at('document.type', 'project'),
		{}
	);

	const trackData = await Client.query(
		Prismic.Predicates.at('document.type', 'track'),
		{ orderings: '[my.track.created_date desc]' }
	);

	return {
		props: {
			projects: projectData.results,
			tracks: trackData.results,
		},
	};
};

export default (props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
			<Header />
			<Section>
				<Intro />
			</Section>
			<Section>
				<About />
			</Section>
			<Section>
				<Projects projects={props.projects} />
			</Section>
			<Section>
				<Tracks tracks={props.tracks} />
			</Section>
			<Footer />
		</Fonts>
	);
};
