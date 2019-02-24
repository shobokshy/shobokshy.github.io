/** @jsx jsx */ import { jsx } from '@emotion/core'
import Button from './button';
import SocialList from './social-list';

const Intro: React.FunctionComponent = () => (
    <div css={{
        padding: '15% 10%'
    }}>
        <h1 css={{
            color: '#4a4a4a',
            textTransform: 'uppercase'
        }}>
            Developer,
            <br/>
            Thinker
            <br/>
            & Musician.
        </h1>
        <p css={{
            fontSize: '16px',
            letterSpacing: '-0.011em',
            lineHeight: '22px'
        }}>
            Aliquam sit amet justo ligula. In dignissim ante ac justo pharetra, hendrerit rutrum nisl scelerisque. Cras at urna pellentesque, maximus tellus eu, iaculis urna. Aliquam tincidunt odio nec nisl maximus interdum ut in nisl.
        </p>
        <SocialList />
        <Button>Say Hey!</Button>
    </div>
)

export default Intro;