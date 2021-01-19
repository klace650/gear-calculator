'use strict';

// ===============Under Construction======================
// Please save to line 32
// let combo = [];

// function sortCombo(arr){
//   arr.forEach(item => {
//     let a = item;
//     console.log(a);
//   })
//   console.log(arr);
// }
// sortCombo(combo);


// function Gear(model, range, combination, type) {
//   this.model = model;
//   this.range = range;
//   this.combination = combination;
//   this.type= type;
//   combo.push(combination);
// }

// $.ajax('./gears.json').then(data => {
//   data.forEach(item => {
//     if (item.type === "cassette"){
//       let gear = new Gear(item.model, item.range, item.combination, item.type);
//     }
//   })
// });
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
  // calculates ratio of selected gear combo
  return $('#chainring option:selected').text() / $('#cogs option:selected').text();
};

// EVENT HANDLERS-----------------------------------------------
$('form').submit(function (e) {
  e.preventDefault();
  $('#showratio').append('<li>', calcRatio(), '</li>');
});
