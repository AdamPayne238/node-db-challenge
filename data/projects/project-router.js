const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();



//  retrieving a list of projects.
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

//  adding projects.
router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });




//  adding tasks.
//  retrieving a list of tasks. The list of tasks should include the project name and project description.
//  When returning project or task information, the completed property should be true or false.
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to get tasks"})
    })
});


module.exports = router;