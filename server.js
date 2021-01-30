'use strict';

// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const { response } = require('express');
require('dotenv').config();

// PORT
// const PORT = process.env.PORT || 3000;
// use line 10 when ready to use .env
const PORT = 3000;

// START EXPRESS + CORS
const app = express();
app.use(cors());

// ROUTES
app.get('/',(req, res) => {
  res.send('Gear Calc Back End')
})


// START SERVER
app.listen(PORT, () => {
  console.log(`Server is...serving to port ${PORT}`);
});