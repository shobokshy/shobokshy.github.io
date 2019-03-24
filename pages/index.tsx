import Layout, { Column } from '../components/layout';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Tracks from '../components/tracks';
import GlobalWrapper from '../components/global-wrapper';

const Index = () => (
	<GlobalWrapper>
		<Layout>
			<Intro/>
			<Column
				gridColumnStart={2}
				width='100%'
			>
				<Projects/>
				<Tracks />
			</Column>
		</Layout>
  	</GlobalWrapper>
)
  
export default Index