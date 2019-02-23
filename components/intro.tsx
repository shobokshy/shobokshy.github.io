/** @jsx jsx */ import { jsx } from '@emotion/core'

const Intro: React.FunctionComponent = props => (
    <div css={{
        height: '100vh',
        padding: '15% 10%'
    }}>
        {props.children}
    </div>
)

export default Intro;