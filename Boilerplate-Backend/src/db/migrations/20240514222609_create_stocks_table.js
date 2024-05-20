exports.up = function(knex) {
    return knex.schema.createTable('Stocks', function(table) {
        table.increments("Id").primary()
        table.date('Date'); 
        table.decimal('Open'); 
        table.decimal('High'); 
        table.decimal('Low'); 
        table.decimal('Close');
        table.bigInteger('Volume');
        table.integer('OpenInt'); 
        table.text("Category")
        table.text("Stock")
        table.decimal("Standard Dev")
        table.text("Risk Level");
        table.decimal("Current Trend")
        table.decimal("Future Trend")
        table.text("Overall Trend")
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Stocks');
  };
