import React, { Component } from 'react';

import Team from './team.jsx';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render () {
    return (
    <div>
      <Team teamName="Green" points="15" place="1st" />
    </div>
  )}
}