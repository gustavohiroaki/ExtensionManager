/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.alterTable('extensions', function (table) {
        table.foreign('sector').references('id').inTable('sectors');
    });
};

exports.down = function () {};
