let express = require('express');
const { UserRoutes } = require('./UserRoutes');


let WebRoutes = express.Router();

WebRoutes.use('/web', UserRoutes);

module.exports = {WebRoutes};