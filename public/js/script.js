'use strict';
// how about an animation that indicated the gear ratio?
// - like a little guy pedaling 
// - provide the user a visual of effort/exertion. 

//  will need to iterate though each cog/chainring combo. for now just a single cog - grow to set with JSON

// GLOBAL VARIABLES



// FUNCTIONS

function Cassette(model, range, combination, type) {
  this.model = model;
  this.range = range;
  this.combination = combination;
  this.type= type
}

let allCassettes = [];
console.log("All Cassettes Array: ", allCassettes);

// AJAX --------------------------------------------------------
// - method pulls data from JSON - temporary until pulling from database
$.ajax('./gears.json').then(data => {
  data.forEach(item => {
    if (item.type === 'cassette'){
      allCassettes.push(new Cassette(item.model, item.range, item.combination, item.type)
    )};
  })
});
// 
// FUNCTIONS --------------------------------------------------------

// TODO - figure out why this console log outputs defined.
// 
function createDropDown(arr) {
  console.log(arr , ':if undefined - bad - expected to get list of cassette models')
};
createDropDown(allCassettes.model);

function calcRatio() {
  // calculates ratio of selected gear combo
  return $('#chainring option:selected').text() / $('#cogs option:selected').text();
};

// EVENT HANDLERS-----------------------------------------------
$('form').submit(function (e) {
  e.preventDefault();
  $('#showratio').append('<li>', calcRatio(), '</li>');
});
