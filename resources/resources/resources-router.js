const express = require('express');

const R = require('./resources-model.js');

const router = express.Router();

// --[POST] /api/resources | adds a new Resource to the Resources table  |
router.post('/', async (req, res) => {
    const resourceData = req.body;

    !resourceData.name ?
        res.status(400).json({ message: `A Name is required to create a new resource in the database.` })
        :
        R.add(resourceData)
            .then(resource => {
                res.status(201).json(resource);
            })
            .catch(err => {
                console.error("the err:is hereeee", err); console.log("err$$$$***&", err)
                res.status(500).json({ message: 'Failed to create new resource' });
            });
});

// --[GET] /api/resources | fetches all Resources from the Resources table | 
router.get('/', async(req, res) => {
    try {
        const resources = await R.find("resources") //select all rows from table resources
        res.status(200).json({ resources })

    } catch (err) {
        res.status(500).json({ message: "Failed to get resources" })
    }

})


module.exports=router;