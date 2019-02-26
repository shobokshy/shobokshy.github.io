/** @jsx jsx */ import { jsx } from '@emotion/core'
import { Document } from 'prismic-javascript/d.ts/documents';
//@ts-ignore
import { RichText, Date } from 'prismic-reactjs';
import React from 'react';

interface Props {
    doc: Document
}

interface State {
    data: any
}

class Track extends React.Component<Props, State> {
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
            <li>
                <div>
                    <h4 css={{marginBottom: 0, marginTop: 0}}>{RichText.asText(this.state.data.name)} <span css={{fontWeight: 100}}>({this.formatDate(this.state.data.created_date)})</span></h4>
                    
                    <a target={this.state.data.url.target} href={this.state.data.url.url}>
                        Listen Here
                    </a>
                </div>
            </li>
        )
    }
}

export default Track