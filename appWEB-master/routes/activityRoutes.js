const express = require('express');
const router = express.Router();

const activityController = require('../controllers/activityController');

router.get('/activities', activityController.getAllActivities); //DA
router.post('/activities/add', activityController.createActivity);//DA
router.get('/activities/:id', activityController.getActivity);//NU
router.put('/activities/:id', activityController.updateActivity);//NU
router.put('/activities/:id/update-count-emoji1', activityController.updateCountEmoji1);//DA
router.put('/activities/:id/update-count-emoji2', activityController.updateCountEmoji2);//DA
router.put('/activities/:id/update-count-emoji3', activityController.updateCountEmoji3);//DA
router.put('/activities/:id/update-count-emoji4', activityController.updateCountEmoji4);//DA


const feedbackController=require('../controllers/feedbackController');
router.get('/feedbacks',feedbackController.getFeedbacks);//DA
router.get('/feedbacks/:id',feedbackController.findFeedbackS);//DA
router.post('/feedbacks/add',feedbackController.addFeedback);//DA

const profesorController=require('../controllers/profesorController');
router.get('/professors',profesorController.getAllProfessors);
router.post('professors/add',profesorController.addProffesor);
router.get('/professors/:pid',profesorController.findProfessor);
router.get('/professors/:pid/activities',profesorController.activtiesProf);
router.post('/professors/:pid/activities/add',profesorController.createActProfessor);



const studentController=require('../controllers/studentController');
router.get('/students',studentController.getAllStudents);
router.get('/students/:sid',studentController.getStudent);
router.post('/students/add',studentController.addStudent);
router.get('/students/:sid/:aid/feedbacks',studentController.getFeedbackActivity);
router.get('/students/:sid/feedbacks',studentController.getFeedback);
router.delete('/students/:id',studentController.deleteStudent);

module.exports = router;
