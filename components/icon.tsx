/** @jsx jsx */ import { jsx } from '@emotion/core'

interface Props {
    type: string,
    size?: number,
    css?: object
}

const Icon: React.FunctionComponent<Props> = props => (
    <object
        type='image/svg+xml'
        data={`/static/icons/${props.type}.svg`}
        css={{
            height: props.size || 14,
            width: props.size || 14,
            ...props.css
        }}
    >
        <style>{`
            * {
                fill: red
            }
        `}
        </style>
    </object>
)

export default Icon;