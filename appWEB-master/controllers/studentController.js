const models = require('../models')

const studentController={

    getAllStudents:async(req, res, next) => {
        try {
            let students = await models.Student.findAll();
            res.status(200).json(students);
            
        } catch (err) {
            next(err);
        }
    },

    getStudent:async(req, res, next) => {
        try {
            let student = await models.Student.findByPk(req.params.sid);
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(400).json({
                    message : 'not found!'
                })
            }
        } catch (err) {
            next(err);
        }
    },

    addStudent: async(req, res, next) => {
        try {
            let student = await models.Student.create(req.body);
            res.status(200).json({
               message : 'created!',
            });
            
        } catch (err) {
            next(err);
        }
    },

    getFeedbackActivity:async(req, res, next) => {
        try {
           let student = await models.Student.findByPk(req.params.sid, {
               include : [models.Feedback]
           });
           
           let feedbackOnActivity = [];
           if (student) {
               student.feedbacks.forEach(fdb => {
                   if (fdb.id_activity == req.params.aid) {
                       feedbackOnActivity.push(fdb)
                   }
               })
               res.status(200).json(feedbackOnActivity)
           } else {
               res.status(404).json({
                   message : 'not found!'
               });
           }
       } catch (err) {
           next(err);
       }
    },

    getFeedback:async(req, res, next) => {
        try {
            let student = await models.Student.findByPk(req.params.sid, {
                include : [models.Feedback]
            });
            
            if (student) {
                res.status(200).json(student.feedbacks);
                
            } else {
                res.status(404).json({
                    message : 'not found!'
                });
            }
        } catch (err) {
            next(err);
        }
     },

     deleteStudent:async(req, res, next) => {
        try {
           let student = await models.Student.findByPk(req.params.id);
           
           if (student) {
               await student.destroy();
               res.status(200).json({
                  message : 'accepted' 
               });
               
           } else {
               res.status(404).json({
                   message : 'not found :('
               });
           }
       } catch(err) {
           next(err);
       }
    }

} 

module.exports=studentController;