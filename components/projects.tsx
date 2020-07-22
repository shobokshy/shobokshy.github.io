/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Content } from './Content';
import { Divider } from './Divider';
import { List } from './List';
import { Link } from './Link';
import { GithubIcon } from './icons/Github';
import { Document } from 'prismic-javascript/d.ts/documents';
import { RichText } from 'prismic-reactjs';

interface ProjectsProps {
	projects: Document[];
}

export const Projects: React.FC<ProjectsProps> = (props) => {
	console.log(props);
	return (
		<Content>
			<Divider short />
			<h3
				id='projects'
				css={{
					scrollMarginTop: 140,
					marginTop: 0,
					marginBottom: '2.5rem',
				}}
			>
				PROJECTS
			</h3>
			<List direction='vertical' spaceSize='xLarge'>
				{props.projects.map((project) => (
					<List.Item key={project.id}>
						<List.Content
							title={RichText.asText(project.data.title)}
							actions={[
								project.data.github_link.target && (
									<Link
										href={project.data.github_link.url}
										icon={<GithubIcon />}
									>
										View Source
									</Link>
								),
							]}
						>
							{RichText.asText(project.data.subtitle)}
						</List.Content>
					</List.Item>
				))}
			</List>
		</Content>
	);
};
