// Update with your config settings.

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/app/database/dev.sqlite3',
        },
        migrations: {
            directory: './src/app/database/migrations',
        },
        useNullAsDefault: true,
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'imafuk29_ExtensionManager',
            user: 'imafuk29_extmgmt',
            password: 'Ext8080@',
            host: '162.241.2.65',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/app/database/migrations',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
