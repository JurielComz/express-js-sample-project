// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql', // Use 'mysql' for MySQL or 'mysql2' for MySQL 2.x
    connection: {
      host: '127.0.0.1', // Change to your host
      user: 'your_username', // Replace with your MySQL username
      password: 'your_password', // Replace with your MySQL password
      database: 'your_database', // Replace with your MySQL database name
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'staging_host', // Change to your staging host
      user: 'your_username',
      password: 'your_password',
      database: 'your_staging_database',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'production_host', // Change to your production host
      user: 'your_username',
      password: 'your_password',
      database: 'your_production_database',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};