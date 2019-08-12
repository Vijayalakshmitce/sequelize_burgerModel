module.exports = function (sequelize, DataTypes) {
    var burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValues: false
        }
    });
    // burger table declare end here

    //burger asscoiates start here

    burgers.associate = function (models) {
        burgers.belongsTo(models.customer, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: true
            }
        });
    }
    //associates end closure here
    return burgers;
}