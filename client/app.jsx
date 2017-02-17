import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Leaderboard from './leaderboard.jsx';
import GivePoints from './givePoints.jsx';
import NavBar from './navbar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getScores = this.getScores.bind(this);


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
        <NavBar />
        <div className="main_app_container">
          <Row className="main_app">
            <Col md={7} sm={12}>
              <Leaderboard scoreData={this.state.scoreData}/>
            </Col>
            <Col md={5} sm={11}>
              <GivePoints onSubmit={this.getScores}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

};
