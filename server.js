// server.js
// where your node app starts

// init project

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');

var app = express();

var meetup = require('meetup-api')({
	key: process.env.API_KEY
});

// console.dir(config);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.post("/", function (request, response) {
  
  var EVENT_TO_COPY = request.body.event.id;
  
  meetup.getEvent({
    'urlname': config.FROM_MEETUP.name,
    'id': EVENT_TO_COPY
  }, function(err, meetupResponse) {
    
    if (err) {
      console.log(err);
    } else {
      console.log('got meetup info!');
      console.log("Meetup Response: " +meetupResponse);
    } 
  
    var newEventParams = {      
      'name': meetupResponse.name,
      'description': meetupResponse.description,
      'group_id': config.TO_MEETUP.id,
      'group_urlname': config.TO_MEETUP.name,
      'time': meetupResponse.time,      
      'venue_id': meetupResponse.venue.id,
      'announce': false,
      'publish_status': 'draft'
    };
    
    meetup.postEvent(newEventParams, function(creationError, creationResponse) {
      if (creationError) {
        console.log(creationError);
      } else {
        console.log(creationResponse);
      }
    });
    
  }); // end of getting event data
  
  response.sendFile(__dirname + '/views/index.html');
});

// // http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
