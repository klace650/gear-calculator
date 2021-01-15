'use strict';
// how about an animation that indicated the gear ratio?
// - like a little guy pedaling 
// - provide the user a visual of effort/exertion. 

//  will need to iterate though each cog/chainring combo. for now just a single cog - grow to set with JSON

// GLOBAL VARIABLES

function Cassette(model, range, combination) {
  this.model = model;
  this.range = range;
  this.combination = combination;
}
// get part data from JSON - eventually this will pull from PSQL database
$.ajax('./gears.json').then(data => {
data.forEach(item => {
  let combo = item.combination;
  let range = item.range;
  console.log('Combo: '+combo,'Range:'+range);
  })
});

// FUNCTIONS






function createDropDown() {
  // build dropdown dynamically
  $("#chainring").append()
};

function calcRatio() {
  // calculates ratio of selected gear combo
  return $('#chainring option:selected').text() / $('#cogs option:selected').text();
};

// EVENT HANDLERS
$('form').submit(function (e) {
  e.preventDefault();
  $('#showratio').append('<li>', calcRatio(), '</li>');
});


