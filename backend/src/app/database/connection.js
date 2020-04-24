import knex from 'knex';
import config from '../../../knexfile';

const connection = knex(config.staging);

export default connection;
