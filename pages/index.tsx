import Link from 'next/link'
import Layout, { Column } from '../components/layout';
import Intro from '../components/intro';

const Index = () => (
	<Layout>
		<Column css={{
			position: 'sticky'
		}}>
      		<Intro>
				<Link href="/resume">
				<a>Resume Page</a>
				</Link>
				<p>Hello Next.js</p>
      		</Intro>
    	</Column>
  	</Layout>
)
  
export default Index