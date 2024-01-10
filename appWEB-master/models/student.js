module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('students', {
       name : {
           type : DataTypes.STRING,
           allowNull: false,
           validate: {
               len : [3, 45]
           }
       },
       
       username : {
           type : DataTypes.STRING,
           allowNull : false,
           validate : {
               len : [3, 15]
           }
       },
       
       pass : {
           type : DataTypes.STRING,
           allowNull : false,
           validate : {
               len : [3, 10]
           }
       }
    }, {
    timestamps : false
});
    
    return Student;
}
