import React, { Component, PropTypes } from 'react';

import Team from './team.jsx';

const dummyData = [
  {
    name: 'Green',
    points: 35
  },
  {
    name: 'Blue',
    points: 20
  },
  {
    name: 'Red',
    points: 15
  },
  {
    name: 'Yellow',
    points: 19
  },
]

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: dummyData
    };
  }




  render () {
    return (
    <div className="leaderboard container"> 
      {this.state.teamData.map((team) => (
        <Team key={team.name} teamName={team.name} points={team.points} />
      ))
      }
    </div>
  )}
}