var express=require("express");
var app=express();

//app route example
app.route('/book')

        //example of route handler (next)
        .get(function(req,resp,next){
            console.log("Response will be send by the next function");
            next()
        },function(req,resp){
            resp.send("Get a random book");
        })

        .post(function(req,resp){
            resp.send("Add a book")
        })

        .put(function(req,resp){
            resp.send("Update the book")
        })

var server=app.listen(8088,function(){
    console.log('Server running at http://127.0.0.1:8088/');
});