const db = require('../db-config.js');

module.exports = {
    getResources,
    addResource,
};

//RESOURCES
//  retrieving a list of resources.
function getResources(){
    return db.select('*')
    .from('resources')
}
//  adding resources.
function addResource(resourceData){
    return db('resources')
    .insert(resourceData)
    .then(resource => {
        return resource
    })
}