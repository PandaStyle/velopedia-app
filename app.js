var Hapi = require('hapi');
var Inert = require('inert');
var strava = require('strava-v3');
var NewRelic = require('newrelic');

// Create a server with a host and port
var server = new Hapi.Server();
server.register(Inert, function () {});
server.connection({
    port: 8080
});

server.state('strava_access_token', {
    ttl: 24 * 60 * 60 * 1000,     // One day
    encoding: 'base64json',
    path: "/"
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            index: true
        }
    }
});


server.route({
    method: 'GET',
    path:'/strava/tokenexchange',
    handler: function (request, reply) {


        if(request.query.error){
            console.log(error);
            console.error(request.query.error);
            throw request.query.error
        }


        var code = request.query.code;
        console.log(request.query);
        strava.oauth.getToken(code, function(err, res){

            if(err)
                throw err;

            reply(res).state('strava_access_token', res.access_token).redirect("/#/strava")
        })
    }
});


server.start(function (err) {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
