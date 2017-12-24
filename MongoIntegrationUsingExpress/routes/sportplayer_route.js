var r = require('request').defaults({
    json: true
});

var async = require('async');
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

module.exports = function(app) {

    /* Read */
    app.get('/sportplayer', function (req, res) {

        async.parallel({
            cricket: function(callback){
                r({uri: 'http://localhost:3000/cricket'}, function(error, response, body) {
                    if (error) {
                        callback({service: 'cricket', error: error});
                        return;
                    };
                    if (!error && response.statusCode === 200) {
                        callback(null, body.data);
                    } else {
                        callback(response.statusCode);
                    }
                });
            },
            football: function(callback){

                client.get('http://localhost:3001/football', function(error, football) {
                    if (error) {throw error;};
                    if (football) {
                        callback(null, JSON.parse(football));
                    } else {

                        r({uri: 'http://localhost:3001/football'}, function(error, response, body) {
                            if (error) {
                                callback({service: 'football', error: error});
                                return;
                            };
                            if (!error && response.statusCode === 200) {
                                callback(null, body.data);
                                // client.set('http://localhost:3001/football', JSON.stringify(body.data), function (error) {
                                client.setex('http://localhost:3001/football', 10, JSON.stringify(body.data), function (error) {
                                    if (error) {throw error;};
                                });
                            } else {
                                callback(response.statusCode);
                            }
                        });

                    }
                });

            }
        },
        function(error, results) {
            res.json({
                error: error,
                results: results
            });
        });

    });

    app.get('/ping', function (req, res) {
        res.json({pong: Date.now()});
    });

};
