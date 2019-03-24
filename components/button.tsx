/** @jsx jsx */ import { jsx } from '@emotion/core'

type Type = 'primary' | 'secondary'

interface Props {
    css?: object
    type?: Type
}

const Button: React.FunctionComponent<Props> = props => {
    const type = props.type || 'primary';
    
    return (
        <button
            {...props}
            css={{
                fontSize: '14px',
                color: `${type === 'primary' ? 'white' : '#e64c4c'}`,
                background: `${type === 'primary' ? '#e64c4c' : 'transparent'}`,
                transition: 'all .2s ease-in',
                boxShadow: `0 4px 14px 0 ${type === 'primary' ? '#00000014' : 'transparent'}`,
                padding: '0 2rem',
                height: '2.5rem',
                borderWidth: 0,
                borderRadius: '7px',
                cursor: 'pointer',
                '&:hover': {
                    background: `${type === 'primary' ? '#c4001d' : '#ff616f4d'}`
                }
        }}>
            {props.children}
        </button>
    )
}

export default Button;