var mongoose=require('mongoose')

var cricketPlayerSchema=mongoose.Schema({
    name:String,
    age:Number,
    strikerate:Number
});

module.exports=mongoose.model('CricketPlayer',cricketPlayerSchema);