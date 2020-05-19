module.exports = {
  type: 'mysql',
  host: process.env.DB_CIENCIAARG_HOST,
  username: process.env.DB_CIENCIAARG_USERNAME,
  password: process.env.DB_CIENCIAARG_PASSWORD,
  port: process.env.DB_CIENCIAARG_PORT,
  database:process.env.DB_CIENCIAARG_NAME,
  logging: 'all',
  entities: ['dist/entity/*.js'],
};
