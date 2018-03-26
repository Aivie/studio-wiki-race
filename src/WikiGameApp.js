import React, { Component } from 'react';
import GameView from './GameView.js';
import WikiLinks from './WikiLinks.js';
import WikiStack from './WikiStack.js';

export default class WikiGameApp extends Component {
  render() {
    // Properties (data) provided by WikiGameHistory.
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var targetTitle = this.props.targetTitle;
    var currentTitle = this.props.currentTitle;

    // Properties (functions) provided by WikiGameHistory.
    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;

    return (
      <div>
        <WikiStack
            titles={this.props.titles}
            handleTitleSelected = {this.props.setCurrenttitle} />
        <GameView title={currentTitle} />
        <WikiLinks
            title={currentTitle}
            handleLinkClick={title => this.props.addTitle(title)} />
      </div>
    );
  }
}
