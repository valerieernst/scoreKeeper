const mysql = require('mysql');
require('dotenv').config();

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
  
//this will return an object with teamName as a key for a points property for every team in the database
module.exports.getScore = function(req, res) {
  getAllTeamScores()
  .then((teams) => {
    let scoreObj = objectify(teams);
    res.send(scoreObj);
  })
}

module.exports.addPoints = function (req, res) {
  console.log(`INSERT INTO points (user_id, points, reason) VALUES (${req.body.user_id}, ${req.body.points}, \'${req.body.reason}\')`)
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO points (user_id, points, reason) VALUES (${req.body.user_id}, ${req.body.points}, \'${req.body.reason}\')`,
    (err, teams) => {
      if(err) reject(err);
      resolve(teams);
    });
  })
  .then((data) => {
    res.send()
  });
}

module.exports.getUsers = function(req, res) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id, name FROM user`, 
    (err, teams) => {
      if(err) reject(err);
      resolve(teams);
    });
  })
  .then((data) => {
    res.send(data);
  })
}
