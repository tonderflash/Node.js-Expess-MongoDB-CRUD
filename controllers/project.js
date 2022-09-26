'use strict'

const Project = require('../models/project');

const validateRequest = (errorMessage, dataParameter, res, err) => {
    if(err) return res.status(500).send({message: errorMessage});
    if(!dataParameter) return res.status(404).send({message: 'Dont save this project'});
    return res.status(200).send({project: dataParameter});
}

const controlles = {
    saveProject: (req, res)=>{
        let project = new Project();

        let params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;

        project.save((err, projectStored)=>{
            return validateRequest('Error to save', projectStored, res, err);            
        });
    },

    getProjects: (req, res)=> {
        Project.find({}).exec((err, project)=> {
            return validateRequest('Error to search data', project, res, err);
        })
    },

    getProject: (req, res) => {
        const projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'Dont exist this project'});

        Project.findById(projectId, (err, project)=> {
            return validateRequest('Error to filter', projectId, res, err);
        })
    },

    updateProject: (req, res) => {
        const projectId = req.params.id;
        const update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated)=> {
            return validateRequest('Error to update', projectUpdated, res, err);
        })
    },

    deleteProject: (req, res) => {
        const projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemove)=>{
            return validateRequest('Cant delete this project', projectRemove, res, err);
        })
    }
};

module.exports = controlles;