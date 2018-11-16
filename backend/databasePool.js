// pool obj can run queries that both select data and insert data into tables
const { Pool } = require('pg');
const databaseConfiguration = require(`./secrets/databaseConfiguration.js`);

const pool = new Pool(databaseConfiguration);

module.exports = pool;