var express=require('express')
var bodyParser=require('body-parser')

var app=express()

app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.get('/',function(req,res) {
    res.send("Hello")
})

app.use(logErrors)
app.use(clientErrorHandler)
//app.use(errorHandler)


app.listen(8082,function(){
    console.log("Server Started...")
});

  
function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  }

  function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
  }
  
  function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  }