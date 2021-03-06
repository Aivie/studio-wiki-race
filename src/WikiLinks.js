import React, { Component } from 'react';
import WikiApi from './WikiApi.js';
import GameView from './GameView.js';

export default class WikiLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount() {
        var self = this;
        WikiApi.getLinks(self.props.title).then((data) => {
            self.setState({ links: data });
        });
    }
    componentDidUpdate() {
        WikiApi.getLinks(this.props.title).then(
            links => this.setState({ links: links }));
    }

    render() {
        // Properties (data) provided by WikiGameHistory
        var renderedLinks = this.state.links.map((data) => {
            return (<button type="button" key={data} onClick={()=>this.props.handleLinkClick(data)}>{data}</button>);
        });

        return (
            <div>
            {renderedLinks}
        </div>
        );
    }
}
