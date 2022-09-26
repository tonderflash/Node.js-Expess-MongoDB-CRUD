'use strict'

const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

router.post('/save-project', projectController.saveProject);
router.get('/project/:id?', projectController.getProject);
router.get('/projects', projectController.getProjects);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);

module.exports = router;