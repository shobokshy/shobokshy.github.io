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
                color: `${type === 'primary' ? 'white' : '#2f54eb'}`,
                background: `${type === 'primary' ? '#2f54eb' : 'transparent'}`,
                transition: 'all .2s ease-in',
                boxShadow: `0 4px 14px 0 ${type === 'primary' ? '#597ef773' : 'transparent'}`,
                padding: '0 2rem',
                height: '2.5rem',
                borderWidth: 0,
                borderRadius: '7px',
                cursor: 'pointer',
                '&:hover': {
                    background: `${type === 'primary' ? '#597ef7' : '#d8eaffe6'}`
                }
        }}>
            {props.children}
        </button>
    )
}

export default Button;