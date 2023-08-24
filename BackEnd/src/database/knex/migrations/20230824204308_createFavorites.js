exports.up = knex => knex.schema.createTable('favorites', table => {
  table.increments('id');
  table.string('user_id').references('id').inTable('users');
  table.integer('dish_id').references('id').inTable('dishes').onDelete('CASCADE');
});

exports.down = knex => knex.schema.dropTable('favorites');
