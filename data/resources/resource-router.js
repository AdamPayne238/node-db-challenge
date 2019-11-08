const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

//  retrieving a list of resources.
router.get('/', (req, res) => {
    Resources.getResources()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

//  adding resources.
router.post('/', (req, res) => {
    const resourceData = req.body;
  
    Resources.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });



module.exports = router;