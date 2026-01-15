const routes = require('express').Router();
const week1Controller = require('../controllers/week1')

routes.get('/', week1Controller.homeRoute);
routes.get('/kayli', week1Controller.kayliRoute);
routes.get('/monty', week1Controller.montyRoute)

module.exports = routes;