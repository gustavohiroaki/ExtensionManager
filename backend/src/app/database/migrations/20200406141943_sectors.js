/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable('sectors', function (table) {
        table.increments();
        table.string('name');
        table.string('color');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('sectors');
};
