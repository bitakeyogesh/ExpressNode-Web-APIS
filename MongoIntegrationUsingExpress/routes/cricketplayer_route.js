var _ = require('lodash');
var CricketPlayer=require('../models/cricketplayer_model')

module.exports=function(app){

    
        /* Create */
        app.post('/cricket',function(req,res){
            var newCricketPlayer=new CricketPlayer(req.body);
            newCricketPlayer.save(function(err){
                if(err){
                    res.json({info:"Error during cricket player create",error:err});
                }
                res.json({info:"Cricket Player Created Successfully.."})
            })

        });
         /* Read */
        app.get('/cricket',function(req,res){
            CricketPlayer.find(function(err,cricketplayer){
                if(err) {
                    res.json({info:"error during find cricket players.."})
                }
                res.json({info:"cricket players found successfully..",data:cricketplayer})
            })
        });

        /* Read by Id*/
        app.get('/cricket/:id', function (req, res) {
            CricketPlayer.findById(req.params.id, function(err, cricketplayer) {
                if (err) {
                    res.json({info: 'error during find cricket player..', error: err});
                };
                if (cricketplayer) {
                     res.json({info: 'cricket player found successfully', data: cricketplayer});
                } else {
                    res.json({info: 'cricket player not found'});
                }
            });
        });
        /* Update */
        app.put('/cricket/:id', function (req, res) {
            CricketPlayer.findById(req.params.id, function(err, cricketplayer) {
                if (err) {
                    res.json({info: 'error during find cricketplayer', error: err});
                };
                if (cricketplayer) {
                    _.merge(cricketplayer, req.body);
                    cricketplayer.save(function(err) {
                        if (err) {
                            res.json({info: 'error during cricketplayer update', error: err});
                        };
                        res.json({info: 'cricketplayer updated successfully'});
                    });
                } else {
                    res.json({info: 'cricketplayer not found'});
                }

            });
        });
       /* Delete */
        app.delete('/cricket/:id', function (req, res) {
            CricketPlayer.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove cricket player', error: err});
            };
            res.json({info: 'cricket player removed successfully'});
        });
    });

}

