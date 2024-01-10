const models = require('../models');

const feedbackController = {
    getFeedbacks: async(req, res, next) => {
        try {
            let feedbacks = await models.Feedback.findAll();
            res.status(200).json(feedbacks);
        } catch (err) {
            next(err);
        }
    },
    addFeedback: async(req, res, next) => {
        try {
            await models.Feedback.create(req.body);
            res.status(200).json({
                message : 'created!'
            })
            
        } catch (err) {
            next(err);
        }
    },
    findFeedbackS:async(req, res, next) => {
        try {
            let feedbacks = await models.Feedback.findAll()
            let specificFeedbacks = []
            
            feedbacks.forEach(fbd => {
                if (fbd.id_activity == req.params.aid) {
                    specificFeedbacks.push(fbd)
                }
            })
            
            res.status(200).json(specificFeedbacks)
        } catch (err) {
            next(err)
        }
    }
};

module.exports = feedbackController;