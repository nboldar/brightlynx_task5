/**
 * функция, создающая таблицу в базе данных Users, c определенными полями
 * @param knex
 * @param Promise
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('website').notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
