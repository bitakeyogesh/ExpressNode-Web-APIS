var _ = require('lodash');
var FootballPlayer=require('../models/footballplayer_model')

module.exports=function(app){

    
        /* Create */
        app.post('/football',function(req,res){
            var newFootballPlayer=new FootballPlayer(req.body);
            newFootballPlayer.save(function(err){
                if(err){
                    res.json({info:"Error during football player create",error:err});
                }
                res.json({info:"football Player Created Successfully.."})
            })

        });
         /* Read */
        app.get('/football',function(req,res){
            FootballPlayer.find(function(err,footballplayer){
                if(err) {
                    res.json({info:"error during find football players.."})
                }
                //res.json({info:"football players found successfully..",data:footballplayer})
                setTimeout(function(){
                    res.json({info:"football players found successfully..",data:footballplayer})
                }, 10000);
            })
        });

        /* Read by Id*/
        app.get('/football/:id', function (req, res) {
            FootballPlayer.findById(req.params.id, function(err, footballplayer) {
                if (err) {
                    res.json({info: 'error during find football player..', error: err});
                };
                if (footballplayer) {
                     res.json({info: 'football player found successfully', data: footballplayer});
                } else {
                    res.json({info: 'football player not found'});
                }
            });
        });
        /* Update */
        app.put('/football/:id', function (req, res) {
            FootballPlayer.findById(req.params.id, function(err, footballplayer) {
                if (err) {
                    res.json({info: 'error during find footballplayer', error: err});
                };
                if (footballplayer) {
                    _.merge(footballplayer, req.body);
                    footballplayer.save(function(err) {
                        if (err) {
                            res.json({info: 'error during footballplayer update', error: err});
                        };
                        res.json({info: 'footballplayer updated successfully'});
                    });
                } else {
                    res.json({info: 'footballplayer not found'});
                }

            });
        });
       /* Delete */
        app.delete('/football/:id', function (req, res) {
            FootballPlayer.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove football player', error: err});
            };
            res.json({info: 'football player removed successfully'});
        });
    });

}

