const models = require('../models');

const profesorController={
    getAllProfessors:async(req, res, next) => {
        try {
            let professors = await models.Professor.findAll();
            
            res.status(200).json(professors);
        } catch (err) {
            next(err);
        }
     },
     addProffesor : async(req, res, next) => {
        try {
            let professor = await models.Professor.create(req.body);
            res.status(200).json({
                message : 'created!'
            });
            
        } catch (err) {
            next(err);
        }
    },
  //  /professor-api/professors/:pid
    findProfessor: async (req, res, next) => {
        try {
            let professor = await models.Professor.findByPk(req.params.pid);
            if (professor) {
                res.status(200).json(professor);
            } else {
                res.status(404).json({message: 'not found'})
            }
    
    
        } catch (err) {
            next(err);
        }
    },
  //  all the activities that a professor has
  activtiesProf:async(req, res, next) => {
    try {
        let professor = await models.Professor.findByPk(req.params.pid, {
            include : [models.Activity]
        });
        
        if (professor) {
            res.status(200).json(professor.activities);
            
        } else {
            res.status(404).json({
                message : 'not found!'
            });
        }
    } catch (err) {
        next(err);
    }
 },
 //create an activity for a professor /professor-api/professors/:pid/activities/add 
 createActProfessor: async(req, res, next) => {
    try {
        let professor = await models.Professor.findByPk(req.params.pid);
        
        if (professor) {
            let activity = req.body;
            activity.professorId = professor.id;
            await models.Activity.create(activity);
            
           res.status(200).json({
               message : 'created!'
           });
        } else {
            res.status(404).json({
                 message : 'professor not found'
             });
        }
        
    } catch (err) {
        next(err);
    }
 }
};
module.exports = profesorController;