var express= require("express");
var app=express();

app.get('/',function(req,resp){
    resp.send('Hello World!');
});

app.get('/name',function(req,resp){
    resp.json({name:"Yogesh"});
});

var server= app.listen(8009,function(){
    console.log('Server running at http://127.0.0.1:8009/');
})