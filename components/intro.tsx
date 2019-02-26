/** @jsx jsx */ import { jsx } from '@emotion/core'
import Button from './button';
import SocialList from './social-list';

const Intro: React.FunctionComponent = () => (
    <div css={{
        position: 'fixed',
        backgroundColor: 'white',
        width: '40vw',
        height: '100vh',
        '@media (max-device-width : 768px)': {
            position: 'absolute',
            height: '98vh',
            width: '100vw',
        }
    }}>
        <div 
            css={{
                padding: 65,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                boxSizing: 'border-box'
            }}
        >
            <div>
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
    </div>
)

export default Intro;