var http = require("http");

var PORTONE =  7000;
var PORTTWO= 7500; 

function handleRequestOne (request, response){
    response.end ("No Jokes here")
}

function handleRequestTwo (request, response){
    response.end ("Other Jokes here")
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function(){
    console.log("Server 7000 is working! " + PORTONE);
});


serverTwo.listen(PORTTWO, function(){
    console.log("Server 7500 is working! " + PORTTWO);
});

