import Layout, { Column } from '../components/layout';
import Intro from '../components/intro';
import Projects from '../components/projects';

const Index = () => (
	<Layout>
		<Intro/>
		<Column css={{
			gridColumnStart: 2
		}}>
			<Projects/>
		</Column>
  	</Layout>
)
  
export default Index