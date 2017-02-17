import React, { Component } from 'react';

const team = ({ teamName, points, place }) => (
  <div className="team">
    <h3 className="team_title">Team {teamName} has {points} points</h3>
  </div>
);

export default team;
