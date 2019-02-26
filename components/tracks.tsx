/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from "react";
import Prismic from 'prismic-javascript';
import { Document } from "prismic-javascript/d.ts/documents";
import Track from "./track";

interface Props {

}

interface State {
    docs: Document[]
}

class Tracks extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            docs: []
        }
    }

    async componentDidMount() {
        const cmsEndpoint = 'https://shobokshy.cdn.prismic.io/api/v2';
        const api = await Prismic.api(cmsEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'track'), { orderings: '[my.track.created_date desc]' });
        if(response) this.setState({docs: response.results})
    }

    render() {
        return (
            <div
                css={{
                    display: 'block',
                    width: '100%',
                    backgroundColor: '#f5f9fc'
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
                    <h2>Music</h2>
                    <ul>
                        {this.state.docs.map(doc => (
                            <Track key={doc.id} doc={doc}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tracks