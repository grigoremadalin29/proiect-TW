module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define('groups', {
        name : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len: [3, 15]
            }
        }
    }, {
    timestamps : false
});
    
    return Group;
}