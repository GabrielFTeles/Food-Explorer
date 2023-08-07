exports.up = knex => knex.schema.createTable('foods', table => {
  table.increments('id');
  table.string('name').notNullable();
  table.string('description').notNullable();
  table.string('category').notNullable();
  table.string('image').notNullable();
  table.decimal('price').notNullable();
});

exports.down = knex => knex.schema.dropTable('foods');
