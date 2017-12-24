var mongoose=require('mongoose')

var footballPlayerSchema=mongoose.Schema({
    name:String,
    age:Number,
    strikerate:Number
});

module.exports=mongoose.model('FootBallPlayer',footballPlayerSchema);