
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');

      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.varchar('description', 128);
    })
    .createTable('resources', tbl => {
      tbl.increments('id');

      tbl.text('resource_name', 128)
        .unique()
        .notNullable();
      tbl.varchar('description', 128);
      tbl.boolean('completed').defaultsTo(false);


    })
    .createTable('tasks', tbl => {
      tbl.increments('id');

      tbl.text('description')
        .notNullable();
      tbl.text('notes')
      tbl.boolean('completed')
        .defaultsTo(false)

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')

      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')

      tbl.primary(['project_id', 'resource_id'])


    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
