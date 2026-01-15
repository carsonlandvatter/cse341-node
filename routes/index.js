const routes = require('express').Router();
const homeController = require('../controllers/home')

routes.get('/', homeController.homeRoute);
routes.use('/contacts', require('./contacts'));

module.exports = routes;