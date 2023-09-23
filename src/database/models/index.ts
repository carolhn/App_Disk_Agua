import { Sequelize } from 'sequelize';
const config = require('../config/database');

const sequelize = new Sequelize(config);

export default sequelize;
