import React, { Component, PropTypes } from 'react';

const team = ({ teamName, points }) => (
  <div className="team">
    <h3 className="team_title">Team {teamName} has {points} points</h3>
  </div>
);

team.propTypes = {
  teamName: PropTypes.string,
  points: PropTypes.number
};

export default team;
