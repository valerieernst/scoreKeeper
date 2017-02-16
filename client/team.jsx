import React, { Component } from 'react';

const team = ({ teamName, points, place }) => (
  <div className="team">
    <h2 className="team_title">Team {teamName} has {points} points</h2>
  </div>
);

export default team;
