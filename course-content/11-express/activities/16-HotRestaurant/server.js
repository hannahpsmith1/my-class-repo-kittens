var express = require("express");
var path = require("path");


var app = express();
var PORT = 3400;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      name: "The Notorious RBG",
      phoneNumber: "18008888888",
      email: "ruth@supreme.gov",
      id: 1
    },
    {
      name: "Michelle Obama",
      phoneNumber: "1675983483248",
      email: "michelle@obama.org",
      id: 2
    },
    {
      name: "Hillary Rodham",
      phoneNumber: "12394329843587",
      email: "hrc@clintonfoundation.org",
      id: 3
    },
    {
      name: "Elizabeth Warren",
      phoneNumber: "11389349874587436",
      email: "liz@destroybloomberg.com",
      id: 4
    },
    {
      name: "Kamala Harris",
      phoneNumber: "11389349874587436",
      email: "kama@coolkids.com",
      id: 5
      }
  ];

//   empty array/object for waitlist
  var waitlist = [{}];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// this not working for some reason
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});


app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.post("/api/reservations/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    characters.push(newreservation);
  
    res.json(newreservation);
    // Somehwere in here I need to determine how to limit the number of new reservations to 5
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});