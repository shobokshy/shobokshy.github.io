import React from "react";
import Project from "./project";
import Prismic from 'prismic-javascript';
import { Document } from "prismic-javascript/d.ts/documents";

interface Props {

}

interface State {
    docs: Document[]
}

class Projects extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            docs: []
        }
    }

    async componentDidMount() {
        const cmsEndpoint = 'https://shobokshy.cdn.prismic.io/api/v2';
        const api = await Prismic.api(cmsEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'project'), { orderings: '[my.project.created_date desc]' });
        if(response) this.setState({docs: response.results})
    }

    render() {
        return (
            <React.Fragment>
                {this.state.docs.map(doc => (
                    <Project key={doc.id} doc={doc} />
                ))}
            </React.Fragment>
        )
    }
}

export default Projects