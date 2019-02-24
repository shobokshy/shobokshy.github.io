/** @jsx jsx */ import { jsx } from '@emotion/core'

interface Props {
    title?: string,
    subTitle?: string,
    inProgress?: boolean,
    backgroundColor?: string
}

const Project: React.FunctionComponent<Props> = props => (
    <div
        css={{
            display: 'block',
            height: '98vh',
            width: '100%',
            backgroundColor: props.backgroundColor
        }}
    >
        Test
    </div>
)

export default Project