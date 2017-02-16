import React, { Component } from 'react';

const team = ({ teamName, points, place }) => (
  <div className="team_div container">
    <h2>The {teamName} Team is in {place} with {points} points</h2>
  </div>
);

export default team;
