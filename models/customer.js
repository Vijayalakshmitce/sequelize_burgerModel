module.exports = function(sequelize,DataTypes){
    var customer = sequelize.define("customer",{
        cust_Name:{
            type: DataTypes.STRING,
            allowNull : true
        }
    });
//table declare end here
//associates starts here
customer.associate = function(models){
    customer.hasMany(models.burgers,{
    onDelete: "cascade"
});

}
    return customer;
}