// 'resources' & 'steps'
const db = require('../../data/dbConfig')
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

// array of all resources
function find() {
    return db('resources');
}

function findById(id) {
    return db('resources')
        .where({ id })
        .first()
}



function add(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return findById(id)
        })
}



function update(changes, id) {
    return changes.resource_id
        ? db('resources')
            .where({ id })
            .update(changes)
            .then(() => findById(id))
        : db('steps')
            .where({ id })
            .update(changes)
            .then(() => findById(id))
}

function remove(id) {
    return db('resources')
        .where({ id })
        .del()
        .then(() => findById(id))
}