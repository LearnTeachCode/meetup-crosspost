var GDILA = {id: 12114102, name: 'girl-develop-it-los-angeles'};
var WWCLA = {id: 12841442, name: 'Women-Who-Code-LA'};
var LTCLA = {id: 18397331, name: 'LearnTeachCode'};

var WSCLA = {id: 241709489, name: 'Write-Speak-Code-Los-Angeles'};
var ELMLA = {id: 26411187, name: 'Elm-LA'};
var SGVT = {id: 11987382, name: 'SGVTech'};

/////********** ID OF PARTICULAR EVENT TO COPY (take this number from the meetup event's URL)
var EVENT_TO_COPY = 249219373;
////**********

// NOTE: I haven't found a good way to find out a meetup's ID yet,
//   but you can get it by entering the Meetup's name (as it appears in the meetup's URL) here:
//   https://secure.meetup.com/meetup_api/console/?path=/:urlname

// ANOTHER NOTE: strangely, it looks like you can't get a meetup's duration or end time!
//   something missing from the meetup API?

// SET WHICH MEETUP TO COPY FROM / TO:

module.exports = {
  
  FROM_MEETUP: LTCLA,
  TO_MEETUP: WWCLA

};