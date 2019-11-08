const db = require('../db-config.js');

module.exports = {
    getProjects,
    addProject,
    getTasks,
};

//PROJECTS
//  retrieving a list of projects.
function getProjects(){
    return db.select('*')
    .from('projects')
}
//  adding projects.
function addProject(projectData){
    return db('projects')
    .insert(projectData)
    .then(project => {
        return project
    })
}

//  adding tasks.
//  retrieving a list of tasks. The list of tasks should include the project name and project description.
//  When returning project or task information, the completed property should be true or false.

function getTasks(project_id){
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.name', 'p.description' , 'p.completed')
    .where('t.project_id', project_id)
}