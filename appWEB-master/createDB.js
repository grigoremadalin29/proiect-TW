var db = require('./models/index');

var activites = require("./data/activity.json")
var feedbacks = require("./data/feedback.json")
var professors = require("./data/profesor.json")
var students=require("./data/student.json")
db.sequelize.sync({ 
    force: true 
}).then(async () => {
    console.log('tables created')

    activites.forEach(async (activity) => {
        await db.Activity.create(activity)
      
    })

    // feedbacks.forEach(async (feedback) => {
    //     await db.Feedback.create(feedback)
    // })

    professors.forEach(async (profesor) => {
        await db.Profesor.create(profesor)
    })
    students.forEach(async (student) => {
        await db.Student.create(student)
    })

}).catch((err) => {
    console.log('could not create tables'+err)
})