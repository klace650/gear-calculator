'use strict';

// ===============Under Construction======================

// TEST GLOBALS
let bombo = [];

// Demo
let dombo = [1,2,3,4,5,6,6,6,7,8];
let uniqueSet = new Set(dombo);
let combo = [...uniqueSet];
console.log(combo, dombo);
// NOTES:
// "new Set" only works with hard coded array
// seems like the set isn't iterating over the bombo array.
// TODO: test out if this should be its own function


function Gear(model, range, combination, type) {
  this.model = model;
  this.range = range;
  this.combination = combination;
  this.type= type;
  // TODO: test out if pushing to bombo array - from Gear will allow the new set method to iterate through it.  
}

$.ajax('./gears.json').then(data => {
  data.forEach(item => {
    if (item.type === "cassette"){
      let gear = new Gear(item.model, item.range, item.combination, item.type);
      let a = item.combination
        a.forEach(item => {
          bombo.push(item);
          // TODO: it would be ideal to use this function to iterate though the bombo array and not need to push to a global. since i'm hoping to pull this data from a database eventually.
      })
    }
  })
});

console.log(bombo, 'Pushed from AJAX')

// ===============Under Construction======================

// GLOBAL VARIABLES

let cassMin = 10;
let cassMax = 50;
let ringMin = 25;
let ringMax = 52;

cogDrop(cassMin,cassMax);
ringDrop(ringMin, ringMax);


//  FUNCTIONS --------------------------------------------------

// Creates dropdown options dynamically - uses hard coded ranges*
function cogDrop(a,b){
  for(var i = a; i < b + 1; i++){
    $('#cogs').append(`<option>${i}</option>`)
  }
}
function ringDrop(a,b){
  for(var i = a; i < b + 1; i++){
    $('#chainring').append(`<option>${i}</option>`)
  }
}
function calcRatio() {
  let a= $('#chainring option:selected').text();
  let b = $('#cogs option:selected').text();
  let c = (a/b);
  let d = ` ratio w/ ${a}T chainring and ${b}T cog.`
  return (c + d);
};

// EVENT HANDLERS-----------------------------------------------
$('form').submit(function (e) {
  e.preventDefault();
  let a = calcRatio();
  $('#showratio').append(`<li> ${a} </li>`);
});
