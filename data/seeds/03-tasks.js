
exports.seed = function(knex) {

      return knex('tasks').insert([
        {description: 'Come up with a modern resume design', note: 'you can check out the resource resume builders', project_id: 1, completed: false}, //1
        {description: 'Refine current resume', note: 'Make sure you have someone proofread your resume', project_id: 1, completed: false},//1
        {description: 'Finish resume and attach to portfolio', note: 'have a link to a resume seperate from your portfolio', project_id: 1, completed: false},//1
        {description: 'Read through Vue Docs', note: 'make sure not to miss aything important and please take notes', project_id: 2, completed: false},//2
        {description: 'Study multiple youtube videos', note: 'make sure to read the comments to see if the project is working for other people', project_id: 2, completed: false}, //2
        {description: 'Complete a vue project', note: 'go to plural sight and finish a guided project', project_id: 2, completed: false}, //2
        {description: 'Work through sprint', note: 'read directions carefully and create project from scratch', project_id: 3, completed: false},//3
        {description: 'Submit sprint', note: 'when you are finished, commit all changes and push to github for review', project_id: 3, completed: false},//3
      ]);
};
