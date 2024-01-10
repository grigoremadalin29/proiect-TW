const models = require('../models');
//const activity = require('../models/activity');


const activityController = {
    // Creează o nouă activitate /activities/add
    createActivity:  async(req, res, next) => {
        try {
            if (req.body.start_date > req.body.end_date) {
                res.status(400).json({
                    message : 'date not valid!'
                })
            } else {
                let activity = await models.Activity.create(req.body);
                res.status(200).json({
                    message : 'created!'
                });
            }
        } catch (err) {
            next(err);
        }
    },

    // Preluarea tuturor activităților
    getAllActivities: async(req, res, next) => {
        try {
            let activities = await models.Activity.findAll();
            
            res.status(200).json(activities);
        } catch (err) {
            next(err);
        }
    },

    // Preluarea unei activități specifice /activities/:id
    getActivity: async (req, res, next) => {
        try {
            let activity = await models.Activity.findByPk(req.params.id);

            if (activity) {
                res.status(200).json(activity);
            } else {
                res.status(404).json({message : 'Activitatea nu a fost găsită.'})
            }
        } catch (err) {
          next(err)
        }
    },

    // Actualizarea unei activități /activities/:id
    updateActivity: async (req, res) => {
        try {
            const activity = await models.Activity.findByPk(req.params.id);
            if (activity) {
                await activity.update(req.body);
                res.status(200).send(activity);
            } else {
                res.status(404).send('Activitatea nu a fost găsită.');
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Ștergerea unei activități
    deleteActivity: async (req, res) => {
        try {
            const activity = await models.Activity.findByPk(req.params.id);
            if (activity) {
                await activity.destroy();
                res.status(204).send('Activitatea a fost ștearsă.');
            } else {
                res.status(404).send('Activitatea nu a fost găsită.');
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    ///activities/:id/update-count-emoji1
    updateCountEmoji1: async(req, res, next) => {
        try {
            let activity = await models.Activity.findByPk(req.params.id);
            
            if (activity) {
                
                let updated = {
                    "id" : activity.id,
                    "name" : activity.name,
                    "start_date" : activity.start_date,
                    "end_date" : activity.end_date,
                    "count_emoji1" : activity.count_emoji1 + 1,
                    "count_emoji2" : activity.count_emoji2,
                    "count_emoji3" : activity.count_emoji3,
                    "count_emoji4" : activity.count_emoji4,
                    "professorId" : activity.professorId
                }
                
                await activity.update(updated);
                //res.status(200).json(activity)
                res.status(200).json({
                    message : 'accepted - updated succesfully count_emoji1!'
                })
            } else {
                
                res.status(400).json({
                    message : 'not found :('
                })
            }
            
        } catch (err) {
            next(err);
        }
},
updateCountEmoji2: async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.id);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1 ,
                "count_emoji2" : activity.count_emoji2+1,
                "count_emoji3" : activity.count_emoji3,
                "count_emoji4" : activity.count_emoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            //res.status(200).json(activity)
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji1!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
},
updateCountEmoji3: async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.id);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1,
                "count_emoji2" : activity.count_emoji2,
                "count_emoji3" : activity.count_emoji3+1,
                "count_emoji4" : activity.count_emoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            //res.status(200).json(activity)
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji1!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
},
updateCountEmoji4: async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.id);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1,
                "count_emoji2" : activity.count_emoji2,
                "count_emoji3" : activity.count_emoji3,
                "count_emoji4" : activity.count_emoji4+1,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            //res.status(200).json(activity)
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji1!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
}
};

module.exports = activityController;
