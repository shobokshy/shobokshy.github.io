import Layout, { Column } from '../components/layout';
import Intro from '../components/intro';

const Index = () => (
	<Layout>
		<Column css={{
			position: 'sticky'
		}}>
      		<Intro/>
    	</Column>
  	</Layout>
)
  
export default Index