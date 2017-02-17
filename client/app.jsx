import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from './leaderboard.jsx'
import GivePoints from './givePoints.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      scoreData: {}
    }
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
        scoreData: data.data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render () {
    return (
      <div>
        <Leaderboard scoreData={this.state.scoreData}/>
        <GivePoints />
      </div>
    )
  }

};
