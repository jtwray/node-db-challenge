
const db = require('../../data/dbConfig')

// 'projects' & 'resources'

module.exports = {
    find,
    findById,
    findTasks,
    findProjectResources,
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

function findProjectResources(id) {

  

    return db('resources as rs')
        .join('project_resources as p_rs', 'rs.id', 'p_rs.resource_id')
        .join('projects as p', 'p_rs.project_id', 'p.id')
        .select('p_rs.project_id', 'p.project_name', 'rs.resource_name', 'p.description')
        .where('p_rs.project_id', id)
        // .orderBy('resource_id', 'asc')
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