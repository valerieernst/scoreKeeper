import React, { Component, PropTypes } from 'react';

import Team from './team.jsx';


const leaderboard = ({ scoreData }) => {
  //iterate through scores object from app component and render each team to screen
  return (
    <div className="leaderboard"> 
      <h1>Here are the standings:</h1>
      {Object.keys(scoreData).map((teamName) => (
        <Team key={teamName} teamName={teamName} points={scoreData[teamName]} />
      ))}
    </div>
  )
}

leaderboard.propTypes = {
  scoreData: PropTypes.object
};

export default leaderboard;
