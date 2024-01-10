const Sequelize = require('express');

module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('activities', {
        // Definește câmpurile modelului
        id_act: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 45]  // Numai șiruri de caractere între 3 și 45 de lungime
            }
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        count_emoji1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,  // dacă este un întreg
                min: 0        // Trebuie să fie mai mare sau egal cu 0
            }
        },
        count_emoji2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,  // dacă este un întreg
                min: 0        // Trebuie să fie mai mare sau egal cu 0
            }
        },
        count_emoji3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,  // dacă este un întreg
                min: 0        // Trebuie să fie mai mare sau egal cu 0
            }
        },
        count_emoji4: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,  // dacă este un întreg
                min: 0        // Trebuie să fie mai mare sau egal cu 0
            }
        }
      
    }, {
        timestamps: false  // Nu adăuga automat câmpurile createdAt și updatedAt
    });

    return Activity;
};
