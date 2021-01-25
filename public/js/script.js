'use strict';

// ===============Under Construction======================

// TEST GLOBALS

let cogCombo = [];
let gearObj = [];
console.log(cogCombo);


function Gear(model, range, combination, type) {
  this.model = model;
  this.range = range;
  this.combination = combination;
  this.type= type;
  gearObj.push(this);
}
$.ajax('./gears.json').then(data => {
  let x = [];
  let y = [];
  data.forEach(item => {
    new Gear(item.model, item.range, item.combination, item.type);
    if (item.type === "cassette"){
      let a = item.combination
        a.forEach(item => {
          let b = item;
          x.push(b)
        })
    } 
  })
  let makeSet = new Set(x);
  let sortSet = [...makeSet];
  let sortedSet = sortSet.sort();
  cogCombo.push(sortedSet)
  sortedSet.forEach(number => {
    $("#cogs").append(`<option>${number}</option>x`)
  })
});

function tryIt (a,b){
  console.log(a,b)
  b.forEach(item => {
    console.log(item.model)
  })
}
tryIt(cogCombo, gearObj);
// ===============Under Construction======================

// GLOBAL VARIABLES

let ringMin = 25;
let ringMax = 52;

ringDrop(ringMin, ringMax);


//  FUNCTIONS --------------------------------------------------

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

// ANIMATION-----------------------------------------------
$('.work').click(function(){
  gsap.timeline()
    .to("#littleRing", {rotation:360 * calcRatio(), transformOrigin:"50% 50%", repeat: 0, duration: 2,})
    .to("#bigRing", {rotation:360, transformOrigin:"50% 50%", repeat: 0, duration: 2, delay: -2})
   });

