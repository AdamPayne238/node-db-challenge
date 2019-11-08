const db = require('../db-config.js');

module.exports = {
    getProjects,
    addProject,
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