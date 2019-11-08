
exports.up = function(knex) {
      // A project is what needs to be done. We want to store the following data about a project:
      return knex.schema.createTable('projects', tbl => {
        //  a unique Id.
        tbl.increments();
        //  a name. This column is required.
        tbl.string('name', 64).notNullable();
        //  a description.
        tbl.string('description', 255);
        //  a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be false.
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    // A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a resource:
    .createTable('resources', tbl => {
        //  a unique Id.
        tbl.increments();
        //  a name. This column is required.
        tbl
        .string('name', 64)
        .notNullable()
        // The database should not allow resources with duplicate names.
        .unique();
        //  a description.
        tbl.string('description', 255);
    })
    // An task one of the steps needed to complete the project. We want to store the following data about an task.
    .createTable('tasks', tbl => {
        //  a unique id.
        tbl.increments();
        //  a description of what needs to be done. This column is required.
        tbl.string('description', 255).notNullable();
        //  a notes column to add additional information.
        tbl.string('note', 160);

        //PROJECT_ID
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        //  a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
};

// ### Business Rules

// - a `project` can use multiple `resources`.
// - the same `resource` can be used in multiple `projects`.
//IF you join resources to tasks, tasks has PROJECT_ID and gives access to projects


exports.down = function(knex) {
    return knex.schema
    //drop tables in reverse order when using foreign keys
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
