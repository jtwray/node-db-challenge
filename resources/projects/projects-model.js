
const db = require('../../data/dbConfig')

// 'projects' & 'resources'

module.exports = {
    find,
    findById,
    findTasks,
    findResources,
    add,
    addResource,
    addTask,
    update,
    remove,
};



function findTasks(id) {
    return db('tasks ')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.id', 'projects.project_name', 'tasks.id', 'tasks.notes','tasks.description','tasks.completed')
        .where('tasks.project_id', id)
        .orderBy('tasks.id', 'asc')
}
// array of all projects
function find() {
    return db('projects');
}

function findById(id) {
console.log(id)

    return db('projects')
        .where('id',id)
        .first()
}

function findResources(id) {

  

    return db('project_resources as prs')
        .join('projects as pr', 'pr.id', 'prs.project_id')
        .select('prs.project_id', 'pr.project_name', 'prs.resource_id', 'prs.instructions')
        .join('')
        .where('prs.project_id', id)
        .orderBy('resource_id', 'asc')
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