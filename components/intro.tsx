/** @jsx jsx */ import { jsx } from '@emotion/core'
import Button from './button';
import SocialList from './social-list';

const Intro: React.FunctionComponent = () => (
    <div css={{
        position: 'fixed',
        width: '40vw'
    }}>
        <div
            css={{
                position: 'absolute',
                top: '15vh',
                padding: '15% 10%'
            }}
        >
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
                lineHeight: '22px',
                fontWeight: 300
            }}>
                Hi, I'm <b css={{fontWeight: 500}}>Ahmed Elshobokshi</b> a developer living in Queensland, Australia, who loves building & designing full stack apps.
            </p>
            <SocialList />
            <Button>Say Hey!</Button>
            <Button type='secondary' css={{marginLeft: '10px'}}>Resume</Button>
        </div>
    </div>
)

export default Intro;