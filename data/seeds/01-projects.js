
exports.seed = function(knex) {

      return knex('projects').insert([
        {name: 'Complete Resume', description: 'Research and design a modern resume', completed: false}, //1
        {name: 'Create an app with Vue', description: 'Research vue and create an application from scratch', completed: false}, //2
        {name: 'Submit Sprint', description: 'complete sprint challenge and submit for grading', completed: false}, //3
      ]);
};
