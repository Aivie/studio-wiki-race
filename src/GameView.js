import React, {Component} from 'react';
import WikiApi from './WikiApi.js';

export default class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: "Loading..."
        };
    }
    componentDidMount() {
        var self = this;
        WikiApi.getSummary(this.props.title).then(
            function(text) {
                self.setState({
                    summary: text
                });
            });
    }
    
    render() {
        // Properties (data) provided by WikiGameHistory
        var currentTitle = this.props.title;
        
    return (
        <div>
        <h2>{currentTitle}</h2>
        <p>{this.state.summary}</p>
        </div>
        );
    }
}