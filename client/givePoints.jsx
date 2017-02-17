import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class GivePoints extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  getUsers () {

  }

  render () {
    return(
      <div>
        <form>
        <FormGroup>
          <ControlLabel>Give this many points</ControlLabel>
          <FormControl id="points" type="number" placeholder="Number of Points" />
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>To</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>For</ControlLabel>
          <FormControl id="reason" type="text" placeholder="Reason" />
        </FormGroup>

        </form>
      </div>
    )
  }
}
