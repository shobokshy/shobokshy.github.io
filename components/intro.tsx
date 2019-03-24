/** @jsx jsx */ import { jsx } from '@emotion/core'
import Button from './button';
import SocialList from './social-list';

const Intro: React.FunctionComponent = () => (
    <div css={{
        position: 'fixed',
        backgroundColor: '#151617',
        color: '#a3a3a3',
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
                    //color: '#d50000',
                    background: 'linear-gradient(90deg, #e64c4c 0%, #ef32fb 100%)',
                    '-webkit-background-clip': 'text',
                    WebkitTextFillColor: 'transparent',
                    textTransform: 'uppercase',
                    fontSize: '40px',
                    letterSpacing: 'unset',
                    fontWeight: 400,
                    fontFamily: 'Permanent Marker'
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