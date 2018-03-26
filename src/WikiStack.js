import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export default class WikiStack extends Component {
    render() {
        var buttons = this.props.titles.map(
            (title) => <button onClick={() => this.props.setCurrentTitle(title)}>{title}</button>);
        return (<div>{buttons}</div>);
    }
}
