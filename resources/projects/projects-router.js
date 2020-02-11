const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();


//  --[GET] /projects | get all projects in the Projects Table    |
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find()//select all rows from table projects
        res.status(200).json({ projects })

    } catch (err) {
        res.status(500).json({ message: "Failed to get projects" })
    }

});


// --[GET] /projects/:id | fetch Project by :id |  

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Projects.findById(id);
        res.status(200).json({ project })
    } catch (err) {
        res.status(500).json({ message: `serverside error fetching the project with id:[${id}]` })
    }
});


// [GET]  /projects/:id/resources  | fetch Resources for Project with :id |
router.get('/:id/resources', async (req, res) => {
    const { id } = req.params;
    try {
        const project_resourcces = await Projects.findResources(id);
        res.status(200).json({ project_resources })
    } catch (err) {
        res.status(500).json({ message: `serverside error fetching the resources for the project with id:[${id}]` })
    }
});



// --[POST] /api/projects | adds a new Project to the Projects Table  |

router.post('/', async (req, res) => {
    const projectData = req.body;
    !projectData.name ?
        res.status(400).json({ message: `A Name is required to create a new project in the database.` })
        :
        projects.add(projectData)
            .then(project => {
                res.status(201).json(project);
            })
            .catch(err => {
                console.error("the err:is hereeee", err); console.log("err$$$$***&", err)
                res.status(500).json({ message: 'Failed to create new project' });
            });
});

// --[POST] /api/projects/:id/resources | adds a new Resource to the Project with :id in the bridge table ProjectResources |
router.post('/:id/resources', async (req, res) => {
    const resourceData = req.body;
    const { id } = req.params;

    !resourceData.name ?
        res.status(400).json({ message: `A Name is required to add a new resource to a project in the database.` })
        :
        projects.findById(id)
            .then(project => {
                if (project) {
                    projects.addresource(resourceData, id)
                        .then(resource => {
                            res.status(201).json(resource);
                        })
                } else {
                    res.status(404).json({ message: 'Could not find project with given id.' })
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new resource' });
            });
});



// --[POST] /api/projects/:id/tasks | adds a new Task to Project with :id   |
router.post('/:id/tasks', (req, res) => {
    const taskData = req.body
    const { id } = req.params;

    !taskData.description ?
        res.status(400).json({ message: `A description is required to creates new task for this project. Try again mi amigo.` })
        :
        projects.findById(id)
            .then(project => {
                if (project) {
                    projects.addtask(taskData, id)
                        .then(task => {
                            res.status(201).json(task);
                        })
                } else {
                    res.status(404).json({ message: 'Could not find project with given id.' })
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new task' });
            });
});


module.exports=router;




// adding resources                 [post]  /api/projects/id/resources
// retrieving a list of resources   [get]   /api/projects/id/resources  
// adding projects                  [post]  /api/projects
// return list of projects          [get]   /api/projects
// adding tasks                     [post]  /api/projects/id/tasks

// [ EACH PROJECT ]  TO  [ MANY RESOURCES]  
// [ EACH RESOURCE]  TO  [ MANY PROJECTS ] 
//    [MANY PROJECTS : MANY RESOURCES] 

// [ ONE  PROJECT ]  TO  [ MANY TASKS    ]
// [  EACH TASK   ]  TO  [ ONE PROJECT   ]
//             [ ONE : MANY ]
