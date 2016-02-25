var Hapi = require('hapi');
var Inert = require('inert');


// Create a server with a host and port
var server = new Hapi.Server();
server.register(Inert, function () {});
server.connection({
    port: 8080
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
            console.error(request.query.error);
            throw request.query.error
        }

        var code = request.query.code;
        strava.oauth.getToken(code, function(err, res){
            if(err)
                throw err;

            reply(res).state('strava_access_token', res.access_token).redirect("/strava/main")
        })
    }
});


server.start(function (err) {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
