import Layout, { Column } from '../components/layout';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Tracks from '../components/tracks';

const Index = () => (
	<Layout>
		<Intro/>
		<Column css={{
			gridColumnStart: 2
		}}>
			<Projects/>
			<Tracks />
		</Column>
  	</Layout>
)
  
export default Index