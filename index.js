'use strict';

const server = require('./src/server');
require('dotenv').config();

const port = process.env.PORT || 8080 ;

server.start(port);