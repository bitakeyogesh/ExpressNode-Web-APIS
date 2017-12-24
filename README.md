# ExpressNode-Web-APIS

# Create Web API Using NodeJS

# A) Create Basic Server

    1) Install NodeJS
    2) Create New Folder /SampleServer
    3) cd /SampleServer
    4) Create package.json using "npm init -y"
    5) create helloworld.js in Linux/MAC use "touch helloworld.js"
    6) Write following code in helloworld.js

        var http = require('http');
        http.createServer(function(req, res) {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Hello World\n');
        }).listen(8008, '127.0.0.1');
        console.log('Server running at http://127.0.0.1:8008/');
    
    7) Run following command to install http package, because we are using in helloworld.js [Not neeeded in Latest Node version]
       npm install --save http
    8) Run helloworld.js by "node helloworld.js"
    9) Open the http://127.0.0.1:8008/ in the browser you can see Hello World on the browser.
    
    Well you have created the server using NodeJS.

# B) Create server and web api's using express. 

    1) Create New Folder /ExpressServer
    2) cd /ExpressServer
    3) Create package.json using "npm init -y"
    4) create helloworld.js in Linux/MAC use "touch helloworld.js"
    5) Write following code in helloworld.js

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
    
    6) Run following command to install express package, because we are using in helloworld.js
       npm install --save express
    8) Run helloworld.js by "node helloworld.js"
    9) Open the http://127.0.0.1:8009/ in the browser you can see Hello World! on browser.
    10) Open the http://127.0.0.1:8009/name in the browser you can see {name:"Yogesh"} JSON on browser.

# C) Mongo Integration using mongoos

# D) Cache the db using redis.
