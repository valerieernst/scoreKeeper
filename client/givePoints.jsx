import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class GivePoints extends Component {
  constructor(props) {
    super(props);

    //bind this context
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

//make changes to state when user fills out form
  changeHandler (e) {
    const key = e.target.id
    this.setState({
      [key]: e.target.value
    })
  }

//gets users to populate give points list -- called on component will mount
  getUsers () {
    axios.get('/users')
    .then((users) => {
      this.setState({
        userList: users.data
      })
    })
  }

//adds points to database and refreshes points board on success via getPoints on app.jsx
  givePoints (e) {
    //don't refresh page to prevent re-rendering all components
    e.preventDefault();
    axios.post('/addPoints', {
      user_id: this.state.user,
      points: this.state.points,
      reason: this.state.reason
    })
    .then((response) => {
      //get scores - this allows us to update scores while only rerendering one component
      this.props.onSubmit();
      //clear input fields
      this.setState({
        points: '',
        user: '',
        reason: ''
      })
    })

  }

//form uses changeHandler function above to log inputs to state
  render () {
    return(
      <div className="give_points">
        <h3>Has someone earned more points?</h3>
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
          <ControlLabel>To:</ControlLabel>
          <FormControl 
            id="user" 
            componentClass="select" 
            placeholder="select"
            value={this.state.user} 
            onChange={this.changeHandler}>
              <option key="blank" value="blank">Select A Player</option>
            {this.state.userList.map((user) => {
              return <option key={user.id} value={user.id}>{user.name}</option>
            })}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>For:</ControlLabel>
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
