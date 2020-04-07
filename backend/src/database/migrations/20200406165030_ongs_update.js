exports.up = function(knex) {
  return knex.schema.table('ongs', function(table){
    table.string('instagram');
    table.string('facebook');
  });
};

exports.down = function(knex) {
  return knex.schema.table('ongs', function(table){
    table.dropColumn('instagram');
    table.dropColumn('facebook');
  });
};
