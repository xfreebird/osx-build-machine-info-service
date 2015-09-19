// Distributed under the MIT license
// Copyright (c) 2014 Nicolae Ghimbovschi

function cmd_exec(cmd, args, cb_stdout) {
  var spawn = require('child_process').spawn,
    child = spawn(cmd, args);
  child.stdout.on('data', function (data) { cb_stdout(data) });
}

var port = 9999;
var script_path = '/usr/local/bin/machine-info';
var valid_commands = new Array('ios' , 'cetificates', 'java', 'profiles', 
    'androidsdk', 'androidndk', 'androidplatforms', 'androidbuildtools',
     'androidemulators', 'envset', 'gems', 'brews', 'all');


var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(port, function() {
    console.log((new Date()) + ' Server is listening on port ' + port);
});

wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {

    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);

            if (valid_commands.indexOf(message.utf8Data) > -1) {
                command = new cmd_exec(script_path, [message.utf8Data], 
                  function (data) {connection.sendUTF (data.toString());}
                );
            }

        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});