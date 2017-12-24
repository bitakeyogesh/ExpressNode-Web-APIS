var express= require("express")
var app=express()
var birds=require('./birds')

app.use('/birds',birds)

app.listen(8009,function(){
    console.log('Server running at http://127.0.0.1:8009/');
})