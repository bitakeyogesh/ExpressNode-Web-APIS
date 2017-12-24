var express=require("express");
var router=express.Router();

// middleware that is specific to this router
router.use(function timeLog(req,resp,next) {
    console.log('Time:',Date.now());
    next()
})

// define the home page route
router.get('/',function(req,resp){
    resp.send("Birds Home Page..");
})

// define the about route
router.get('/about',function(req,resp){
    resp.send("About Birds...")
})

module.exports=router;