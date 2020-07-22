/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { Divider } from './Divider';
import { List } from './List';
import { Link } from './Link';
import { Document } from 'prismic-javascript/d.ts/documents';
import { RichText } from 'prismic-reactjs';
import { SpotifyIcon } from './icons/Spotify';
import { SoundCloudIcon } from './icons/SoundCloud';

interface TrackProps {
	tracks: Document[];
}

export const Tracks: React.FC<TrackProps> = (props) => {
	const formatDate = (date: string) => {
		const d = new Date(date);
		return Intl.DateTimeFormat('en-AU', {
			year: 'numeric',
			month: 'short',
			day: '2-digit',
		}).format(d);
	};

	console.log(props.tracks);

	return (
		<Content>
			<Divider short />
			<h3
				id='music'
				css={{
					scrollMarginTop: 140,
					marginTop: 0,
					marginBottom: '2.5rem',
				}}
			>
				MUSIC
			</h3>
			<List direction='vertical' spaceSize='large'>
				{props.tracks.map((track) => (
					<List.Item key={track.id}>
						<List.Content
							title={RichText.asText(track.data.name)}
							subtitle={formatDate(track.data.created_date)}
							actions={[
								track.data.spotify.url && (
									<Link
										href={track.data.spotify.url}
										target={track.data.spotify.target}
										icon={<SpotifyIcon />}
									>
										Spotify
									</Link>
								),
								track.data.soundcloud.url && (
									<Link
										href={track.data.soundcloud.url}
										target={track.data.spotify.target}
										icon={<SoundCloudIcon />}
									>
										SoundCloud
									</Link>
								),
								track.data.url.url && (
									<Link
										href={track.data.url.url}
										target={track.data.spotify.target}
									>
										Other Platforms
									</Link>
								),
							]}
						/>
					</List.Item>
				))}
			</List>
		</Content>
	);
};
