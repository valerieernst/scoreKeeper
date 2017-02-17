import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class GivePoints extends Component {
  constructor(props) {
    super(props);
    this.givePoints = this.givePoints.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

    this.state={
      userList: [],
      points: '',
      user: '',
      reason: ''
    }
  }

  componentWillMount () {
    this.getUsers();
  }

  changeHandler (e) {
    const key = e.target.id
    this.setState({
      [key]: e.target.value
    })
  }

  getUsers () {
    axios.get('/users')
    .then((users) => {
      this.setState({
        userList: users.data
      })
    })
  }

  givePoints () {
  }

  render () {
    return(
      <div>
        <form>
        <FormGroup>
          <ControlLabel>Give this many points</ControlLabel>
          <FormControl 
            id="points" 
            type="number" 
            placeholder="Number of Points" 
            value={this.state.points} 
            onChange={this.changeHandler} 
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>To</ControlLabel>
          <FormControl 
            id="user" 
            componentClass="select" 
            placeholder="select"
            value={this.state.user} 
            onChange={this.changeHandler}>
            {this.state.userList.map((user) => {
              return <option key={user.id} value={user.id}>{user.name}</option>
            })}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>For</ControlLabel>
          <FormControl 
            id="reason" 
            type="text" 
            placeholder="Reason" 
            value={this.state.reason} 
            onChange={this.changeHandler} 
          />
        </FormGroup>

        <Button type="submit" onClick={this.givePoints}>
          Submit
        </Button>
        </form>
      </div>
    )
  }
}
