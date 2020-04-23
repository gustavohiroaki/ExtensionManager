/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable('extensions', function (table) {
        table.integer('extension');
        table.string('name');
        table.integer('sector');
        table.string('position');
        table.string('description');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('extensions');
};
