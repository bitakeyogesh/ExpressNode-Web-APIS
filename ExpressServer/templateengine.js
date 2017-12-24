  var express= require("express");
  var app=express();
  app.set('view engine', 'pug')
 
   app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

  var server= app.listen(8009,function(){
      console.log('Server running at http://127.0.0.1:8009/');
  })