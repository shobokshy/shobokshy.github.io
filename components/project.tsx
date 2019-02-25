/** @jsx jsx */ import { jsx } from '@emotion/core'
import { Document } from 'prismic-javascript/d.ts/documents';
//@ts-ignore
import { RichText, Date } from 'prismic-reactjs';
import React from 'react';

interface Props {
    doc: Document
    backgroundColor?: string
}

interface State {
    data: any
}

class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            data: this.props.doc.data
        }
    }

    formatDate(date: string) {
        const d = Date(date);
        return Intl.DateTimeFormat('en-AU', {
            year: 'numeric',
            month: 'short',
            day: '2-digit' 
        }).format(d);
    }

    render() {
        return (
            <div
                css={{
                    display: 'block',
                    height: '98vh',
                    width: '100%',
                    backgroundColor: this.state.data.background_color
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
                    <div css={{fontWeight: 100, color: 'white'}}>{this.formatDate(this.state.data.created_date)}</div>

                    <div css={{
                        marginTop: 'auto',
                        color: 'white'
                    }}>
                        <h4 css={{marginBottom: 0}}>{RichText.asText(this.state.data.title)}</h4>
                        <div css={{fontWeight: 200}}>{RichText.asText(this.state.data.subtitle)}</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Project