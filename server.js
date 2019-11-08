const express = require('express');

const server = express();

server.use(express.json());

const ProjectRouter = require('./data/projects/project-router');
const ResourceRouter = require('./data/resources/resource-router');

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server;