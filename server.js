'use strict';

// DEPENDENCIES
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 3000;

// START EXPRESS + CORS
const app = express();
app.use(cors());

// ROUTES

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is...serving to port ${PORT}`);
});