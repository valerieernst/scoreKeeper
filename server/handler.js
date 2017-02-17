const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DB
});

db.connect(err => err ? console.error(err) : console.log('DB Connection success!'));

function getAllTeamScores() {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM user INNER JOIN team ON team.id = user.team_id INNER JOIN points ON user.id = points.user_id`, 
    (err, teams) => {
      if(err) reject(err);
      resolve(teams);
    });
  });
}

//used to turn array into an object
function objectify (array) {
  let resultsObj = {};
  array.forEach((item) => {
    resultsObj[item.name] ? resultsObj[item.name] += item.points : resultsObj[item.name] = item.points;
  });
  return resultsObj;
}
  
//this will return an array of objects with team and points properties
module.exports.getScore = function(req, res) {
  getAllTeamScores()
  .then((teams) => {
    let scoreObj = objectify(teams);
    res.send(scoreObj);
  })
}
