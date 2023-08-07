exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id');
  table.string('name').notNullable();
  table.integer('food_id').references('id').inTable('foods').onDelete('CASCADE');
});

exports.down = knex => knex.schema.dropTable('ingredients');
