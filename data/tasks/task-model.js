const db = require('../db-config.js');

module.exports = {
    getTasks,
    addTask,
};


function getTasks(){
    return db.select('*')
    .from('tasks')
}

function addTask(taskData){
    return db('tasks')
    .insert(taskData)
    .then(task => {
        return task
    })
}
