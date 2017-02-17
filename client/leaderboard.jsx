import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Team from './team.jsx';


export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.getScores = this.getScores.bind(this);

    this.state = {
      teamData: []
    };
  }

  componentWillMount () {
    this.getScores();
  }

  getScores () {
    axios.get('/scores')
    .then((data) => {
      this.setState({
        teamData: data.data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }


  render () {
    return (
    <div className="leaderboard container"> 
      {Object.keys(this.state.teamData).map((teamName) => (
        <Team key={teamName} teamName={teamName} points={this.state.teamData[teamName]} />
      ))
      }
    </div>
  )}
}