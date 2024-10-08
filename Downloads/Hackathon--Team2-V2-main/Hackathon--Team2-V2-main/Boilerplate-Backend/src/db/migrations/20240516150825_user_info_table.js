exports.up = function(knex) {
    return knex.schema.createTable('User Info', function(table) {
        table.increments("Id").primary()
        table.text("Username");
        table.text("Password");
        table.text("Email")
        table.text("Phone Number")
        table.integer("Investment Amount")
        table.text("Investment Frequency")
        table.integer("Financial Goals")
        table.text("Experience")
        table.text("Stocks in Portfolio")
        table.text("ETFs in Portfolio")

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('User Info');
  };
