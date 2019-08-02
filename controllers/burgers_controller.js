var burgerdb = require("../models");

module.exports = function(app){

    app.get("/",function(req,res){
        burgerdb.burgers.findAll({}).then(function(result){
            var burgerDisplay = {
                burgers: result
            }
            res.render("index",burgerDisplay);
        })
    });
    ///get all end closure here
    
    


app.post("/app/custName",function(req,res){
burgerdb.customer.create({
    cust_Name:req.body.cust_Name
}).then(function(result){
    res.json({id : result.insertId})
});



});
//custname end closure here


app.post("/app/burger",function(req,res){
    burgerdb.burgers.create({
        burger_name:req.body.burger_name
}).then(function(result){
    res.json({id : result.insertId})
});
});
//post end closure here


app.put("/app/burger/:id",function(req,res){
burgerdb.burgers.update({
    devoured : req.body.devoured,

},{
    where:{
        id: req.params.id,
       
    }

}).then(function(result){
    res.json(result);
    console.log(result);
})
});
//put end closure here


app.delete("/app/burger/:id",function(req,res){
burgerdb.burgers.destroy({
    where:{
        id:req.params.id
    }
}).then(function(data){
    res.json(data);
})

});
//delete end closure here
}