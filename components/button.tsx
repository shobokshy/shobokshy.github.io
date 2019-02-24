/** @jsx jsx */ import { jsx } from '@emotion/core'

const Button: React.FunctionComponent = props => (
    <button css={{
        fontSize: '14px',
        color: 'white',
        background: '#0076ff',
        boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
        padding: '0 2rem',
        height: '2.5rem',
        borderRadius: '7px',
        cursor: 'pointer',
        '&:hover': {
            background: 'rgba(0,118,255,0.9)'
        }
    }}>
        {props.children}
    </button>
)

export default Button;