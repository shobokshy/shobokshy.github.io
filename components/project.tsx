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
        <div 
            css={{
                padding: 65,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box'
            }}
        >
            <div css={{fontWeight: 100, color: 'white'}}>22 Feb 2019</div>

            <div css={{
                marginTop: 'auto',
                color: 'white'
            }}>
                <h4 css={{marginBottom: 0}}>Digital Reports</h4>
                <div css={{fontWeight: 200}}>A collaborative platform for report authoring</div>
            </div>

        </div>
    </div>
)

export default Project