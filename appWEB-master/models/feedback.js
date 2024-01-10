const express = require('express');

module.exports = function(sequelize, DataTypes) {
    var Feedback = sequelize.define('feedbacks', {
        time_stamp : {
            type : DataTypes.STRING,
            allowNull : false
        },
        
        id_act : {
          type : DataTypes.INTEGER,    
          references: {
            model: 'activities',
            key: 'id_act'
        },
          allowNull : false
        },
        
        emoji : {
            type : DataTypes.STRING,
            allowNull : false
            }
        
    }, {
    timestamps : false
});
    
    return Feedback;
}