"use strict";

require('dotenv').config();

const express = require('express');
const app = express();
//const parser = express.json();

require('./config');

const { PORT } = require('./config');

app.use(express.static('public'));


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));