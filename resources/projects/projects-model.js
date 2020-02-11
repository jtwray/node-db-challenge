
const db = require('../../data/dbConfig')

// 'projects' & 'resources'

module.exports = {
    find,
    findById,
    findResources,
    add,
    addResource,
    addTask,
    update,
    remove,
};

// array of all projects
function find() {
    return db('projects');
}

function findById(id) {
    return [db('projects')
        .where({ id })
        .first(),]
}

function findResources(id) {

  

    return db('resources as rs')
        .join('projects as pr', 'pr.id', 'rs.project_id')
        .select('rs.id', 'pr.project_name', 'rs.resource_number', 'rs.instructions')
        .where('rs.project_id', id)
        .orderBy('resource_number', 'asc')
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return findById(id)
        })
}

function addResource(resource, project_id) {
    return db('resources')
        .insert({ ...resource, project_id })
        .then(([id]) => {
            return db('resources')
                .where({ id })
        })
}

function addTask(task, project_id) {
    return db('tasks')
        .insert({ ...task, project_id })
        .then(([id]) => {
            return db('tasks')
                .where({ id })
        })
}

function update(changes, id) {
    return changes.project_id
        ? db('projects')
            .where({ id })
            .update(changes)
            .then(() => findById(id))
        : db('resources')
            .where({ id })
            .update(changes)
            .then(() => findById(id))
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
        .then(() => findById(id))
}