// For future database

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//   return knex.schema
//   .createTable('mountainBikes', (table) => {
//     table.increments('id').primary();
//     table.string('make');
//     table.string('model');
//     table.integer('suspensionTravel');
//     table.string('wheelSize');
//     table.string('ridingStyle');
//     table.decimal('price', 9, 2);
//     table.string('imageUrl');
//     table.string('description');
//     table.boolean('favorite');
//     table.timestamps(true, true);
//   })
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//   return knex.schema.dropTable('bikes')
// };
