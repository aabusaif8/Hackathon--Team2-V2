export const up = async (knex) => {
  await knex.schema.createTable('login', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('login');
};