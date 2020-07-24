var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
  });


  function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
  
    case "/":
      return displayRoot(res);
  
    case "/food":
      return displayFood(res);

    case "/framework":
      return displayFramework(res);

    case "/movies":
      return displayMovies(res);
  
    default:
      return display404(path, res);
    }
  } 

function displayRoot(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } 

function displayFood(res) {
        // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/food.html", function(err, data) {
            if (err) throw err;
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });
        } 

function displayFramework(res) {
            // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/framework.html", function(err, data) {
            if (err) throw err;
                // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
                // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            });
        } 

function displayMovies(res) {
            // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/movies.html", function(err, data) {
            if (err) throw err;
                // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
                // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            });
        } 

// function display404(url, res) {
//         var myHTML = "<html>" +
//               "<body><h1>404 Not Found </h1>" +
//               "<p>The page you were looking for: " + url + " can not be found</p>" +
//               "</body></html>";
          
//             // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end(myHTML);
//         }