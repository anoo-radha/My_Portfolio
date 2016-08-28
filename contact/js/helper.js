/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.
*/


/*
HTML strings.
*/
var HTMLheaderName = '<h1 id="name">%data%  </h1>';
var HTMLheaderRole = '<span class="green-text">%data%</span><hr>';

var HTMLcontactGeneric = '<ul class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></ul>';
var HTMLmobile = '<ul class="flex-item"><span class="orange-text"><i class="fa fa-mobile" aria-hidden="true"></i> &ensp;mobile</span><span class="white-text">%data%</span></ul><br>';
var HTMLemail = '<ul class="flex-item"><span class="orange-text"><i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i>  email</span><span class="white-text"><a href=%content%>%data%</a></span></ul><br>';
var HTMLgithub = '<ul class="flex-item"><span class="orange-text">github</span><span class="white-text"><a href=%content%>%data%</a></span></ul><br>';
var HTMLblog = '<ul class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></ul><br>';
var HTMLlinkedIn = '<ul class="flex-item"><span class="orange-text">linkedIn</span><span class="white-text"><a href=%content%>%data%</a></span></ul><br>';
var HTMLlocation = '<ul class="flex-item"><span class="orange-text"><i class="fa fa-map-marker" aria-hidden="true"></i> location</span><span class="white-text">%data%</span></ul>';

// var HTMLemail='<ul class="input-group margin-bottom-sm"><span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span><a href=%content%>%data%</a></ul>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});