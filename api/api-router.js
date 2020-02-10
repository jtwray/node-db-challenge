const router = require('express').Router()

const projectsRouter = require('./resources/projects/projects-router.js')
const tasksRouter = require('./resources/tasks/tasks-router.js')
const resourcesRouter = require('./resources/resources/resources-router.js')

router.use('/projects', projectsRouter)
router.use('/tasks', tasksRouter)
router.use('/resources', resourcesRouter)

router.get('/', (req, res) => {
    res.json({ api: "It's running. Servers UP." })
});

module.exports = router;