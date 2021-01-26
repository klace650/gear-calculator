'use strict';



// GLOBAL VARIABLES
let gearObj = [];

function Gear(model, range, combination, type) {
  this.model = model;
  this.range = range;
  this.combination = combination;
  this.type= type;
}

$.ajax('./gears.json').then(data => {
  let x = [];
  let y = [];
  data.forEach(item => {
    new Gear(item.model, item.range, item.combination, item.type);
    if (item.type === "cassette"){
      let a = item.combination
        a.forEach(item => {
          x.push(item)
        })
    } else if (item.type === 'crankset'){
      let c = item.combination
      c.forEach(item => {
        y.push(item)
      })
    }
  })
  let cass = removeDuplicates(x);
  let ring = removeDuplicates(y);
  cass.forEach(number => {
    $('#cogs').append(`<option>${number}</option>`);
  })
  ring.forEach(number => {
    $('#chainring').append(`<option>${number}</option>`)
  })
});


//  FUNCTIONS --------------------------------------------------


function calcRatio() {
  let a= $('#chainring option:selected').text();
  let b = $('#cogs option:selected').text();
  let c = (a/b);
  let d = ` ratio w/ ${a}T chainring and ${b}T cog.`
  return (c + d);
};

function removeDuplicates(arr){
  let makeSet = new Set (arr);
  let sortSet = [...makeSet];
  let sortedSet = sortSet.sort();
  return sortedSet;
}

// EVENT HANDLERS-----------------------------------------------

$('form').submit(function (e) {
  e.preventDefault();
  let a = calcRatio();
  $('#showratio').append(`<li> ${a} </li>`);
});

// ANIMATION-----------------------------------------------

function gearRatio() {
  // calculates ratio of selected gear combo
  return $('#chainring option:selected').text() / $('#cogs option:selected').text();
};

$('.work').click(function(){
  gsap.timeline()
    // Comment out .set's if you want to run as "reset on click"
    .set("#littleRing", {clearProps: "all"})
    .set("#bigRing", {clearProps: "all"}) 
    .to("#littleRing", {rotation:360 * gearRatio(), transformOrigin:"50% 50%", repeat: 0, duration: 2, delay: .5})
    .to("#bigRing", {rotation:360, transformOrigin:"50% 50%", repeat: 0, duration: 2, delay: -2})  
  });


  // Uncomment below if you want to reset the animation on click
  //  $('.reset').click(function(){
  //   gsap.timeline()
  //   .set("#littleRing", {clearProps: "all"})
  //   .set("#bigRing", {clearProps: "all"})
  //    });