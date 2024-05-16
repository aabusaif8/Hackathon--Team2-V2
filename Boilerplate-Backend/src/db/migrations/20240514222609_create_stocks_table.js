exports.up = function(knex) {
    return knex.schema.createTable('Stocks', function(table) {
        table.date('Date'); 
        table.decimal('Open'); 
        table.decimal('High'); 
        table.decimal('Low'); 
        table.decimal('Close');
        table.bigInteger('Volume');
        table.integer('OpenInt'); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Stocks');
  };
