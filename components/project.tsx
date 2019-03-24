/** @jsx jsx */ import { jsx } from '@emotion/core'
import { GitHub } from 'react-feather';
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
                    backgroundImage: `linear-gradient(-156deg, ${this.state.data.background_gradient_color_1} 19%, ${this.state.data.background_gradient_color_2} 100%) !important`
                }}
            >
                <div 
                    css={{
                        padding: 65,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                >
                    <div css={{fontWeight: 100, color: 'white'}}>{this.formatDate(this.state.data.created_date)}</div>

                    <div css={{marginTop: 'auto', textAlign: 'center'}}>
                        <img css={{maxWidth: '90%'}} src={this.state.data.feature_image.url} alt={this.state.data.feature_image.alt} />
                    </div>

                    <div css={{
                        marginTop: 'auto',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h4 css={{marginBottom: 0, marginTop: 0}}>{RichText.asText(this.state.data.title)}</h4>
                            <div css={{fontWeight: 200}}>{RichText.asText(this.state.data.subtitle)}</div>
                        </div>
                        <div>
                            {this.state.data.github_link.target && (
                                <a target={this.state.data.github_link.target} href={this.state.data.github_link.url}>
                                    <GitHub className="icon" />
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Project