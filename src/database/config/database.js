const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'docker',
  database: process.env.PG_DATABASE || 'apivendas',
  host: process.env.PG_HOST || 'localhost',
  port: Number(process.env.PG_PORT),
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
