import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Team from './team.jsx';


export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    //must bind this context
    this.getScores = this.getScores.bind(this);

    this.state = {
      teamData: {}
    };
  }

  componentWillMount () {
    //get score data before component mounts
    this.getScores();
  }

  getScores () {
    //make http request to server
    axios.get('/scores')
    .then((data) => {
      //store score data to component state
      this.setState({
        teamData: data.data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }


  render () {
    //iterate through scores object and render each team to screen
    return (
    <div className="leaderboard container"> 
      {Object.keys(this.state.teamData).map((teamName) => (
        <Team key={teamName} teamName={teamName} points={this.state.teamData[teamName]} />
      ))
      }
    </div>
  )}
}
