'use strict';
// how about an animation that indicated the gear ratio?
// - like a little guy pedaling 
// - provide the user a visual of effort/exertion. 

//  will need to iterate though each cog/chainring combo. for now just a single cog - grow to set with JSON

// GLOBAL VARIABLES



// FUNCTIONS

function Gear(model, range, combination, type) {
  this.model = model;
  this.range = range;
  this.combination = combination;
  this.type= type;
}



// AJAX --------------------------------------------------------
// - method pulls data from JSON - temporary until pulling from database
$.ajax('./gears.json').then(data => {
  data.forEach(item => {
    let gear = new Gear(item.model, item.range, item.combination, item.type);
    buildOptions(gear);
  })
});
// 
// FUNCTIONS --------------------------------------------------------
function buildOptions (arr){
  let a = arr.combination;
  // console.log(a);
  let b = [];
  a.forEach(item => {
    // console.log(item)
    b.push(item);

  })
  console.log(b);
};

function calcRatio() {
  // calculates ratio of selected gear combo
  return $('#chainring option:selected').text() / $('#cogs option:selected').text();
};

// EVENT HANDLERS-----------------------------------------------
$('form').submit(function (e) {
  e.preventDefault();
  $('#showratio').append('<li>', calcRatio(), '</li>');
});
