const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 3030

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log('App listening on ', port));