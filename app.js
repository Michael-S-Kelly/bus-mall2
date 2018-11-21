'use strict';

var headerEl = document.getElementById('headerStuff');
var imageHeaderEl = document.createElement('img');
var titleHeaderEl = document.createElement('h1');
var navBarEl = document.createElement('div');
var homeNavEl = document.createElement('div');
var productsNavEl = document.createElement('div');
var aboutNavEl = document.createElement('div');
var contactNavEl = document.createElement('div');

var mainEl = document.getElementById('mainStuff');
var resultsEl = document.createElement('div');
var imgDivEl = document.createElement('div');
var imgDiv1El = document.createElement('div');
var imgDiv2El = document.createElement('div');
var imgDiv3El = document.createElement('div');
var firstImgEl = document.createElement('img');
var secondImgEl = document.createElement('img');
var thirdImgEl = document.createElement('img');
var voteDivEl = document.createElement('div');
var messageDivEl = document.createElement('div');
var canvasEl = document.createElement('canvas');

headerEl.appendChild(imageHeaderEl);
headerEl.appendChild(titleHeaderEl);
headerEl.appendChild(navBarEl);
navBarEl.appendChild(homeNavEl);
navBarEl.appendChild(productsNavEl);
navBarEl.appendChild(aboutNavEl);
navBarEl.appendChild(contactNavEl);

mainEl.appendChild(resultsEl);
mainEl.appendChild(imgDivEl);
mainEl.appendChild(voteDivEl);
mainEl.appendChild(messageDivEl);
imgDivEl.appendChild(imgDiv1El);
imgDivEl.appendChild(imgDiv2El);
imgDivEl.appendChild(imgDiv3El);
imgDiv1El.appendChild(firstImgEl);
imgDiv2El.appendChild(secondImgEl);
imgDiv3El.appendChild(thirdImgEl);
messageDivEl.appendChild(canvasEl);


imageHeaderEl.id = 'imageHeader';
titleHeaderEl.id = 'titleHeader';
navBarEl.id = 'navBar';
homeNavEl.id = 'homeNav';
productsNavEl.id = 'productsNav';
aboutNavEl.id = 'aboutNav';
contactNavEl.id = 'contactNav';
homeNavEl.className = 'navButton';
productsNavEl.className = 'navButton';
aboutNavEl.className = 'navButton';
contactNavEl.className = 'navButton';

resultsEl.id = 'results';
imgDivEl.id = 'imgDiv';
imgDiv1El.id = 'imgDiv1';
imgDiv2El.id = 'imgDiv2';
imgDiv3El.id = 'imgDiv3';
imgDiv1El.className = 'imgDivCl';
imgDiv2El.className = 'imgDivCl';
imgDiv3El.className = 'imgDivCl';
firstImgEl.id = 'firstImg';
secondImgEl.id = 'secondImg';
thirdImgEl.id = 'thirdImg';
firstImgEl.className = 'imgCl';
secondImgEl.className = 'imgCl';
thirdImgEl.className = 'imgCl';
voteDivEl.id = 'voteDiv';
messageDivEl.id = 'messageDiv';
canvasEl.id = 'results1';

var lastSet = [];
var totCl = 0;
var products = [];

function Product(name, catPic) {
  this.name = name;
  this.catPic = catPic;
  this.views = [];

  if(localStorage.getItem('votes')) {
    this.votes = JSON.parse(localStorage.getItem('votes')); //number of votes received for product
  }else{
    this.votes = [];
  }
  //this.votes = [];

  var cOne = Math.floor(Math.random() * 255);
  var cTwo = Math.floor(Math.random() * 255);
  var cThree =Math.floor(Math.random() * 255);

  this.bgCol = `rgba(${cOne}, ${cTwo}, ${cThree}, 0.2)`;
  this.bdrCol = `rgba(${cOne}, ${cTwo}, ${cThree}, 1)`;

  products.push(this);
}

new Product('R2D2 Carry-On Bag', './assets/bag.jpg');
new Product('Banana Slicer', './assets/banana.jpg');
new Product('Bathroom iPad Holder', './assets/bathroom.jpg');
new Product('Boots', './assets/boots.jpg');
new Product('Breakfast Combo Unit', './assets/breakfast.jpg');
new Product('Meatball Bubblegum', './assets/bubblegum.jpg');
new Product('Chair', './assets/chair.jpg');
new Product('Cthulhu Play Figure', './assets/cthulhu.jpg');
new Product('Duck Mask for Dogs', './assets/dogduck.jpg');
new Product('Can of Dragon Meat', './assets/dragon.jpg');
new Product('Pens with Eating Utencil Caps', './assets/pen.jpg');
new Product('Dust Mop for Pets', './assets/pet-sweep.jpg');
new Product('Pizza Scissors', './assets/scissors.jpg');
new Product('Shark Sleeping Bag', './assets/shark.jpg');
new Product('Dust Mop for Babies', './assets/sweep.png');
new Product('Can of Unicorn Meat', './assets/unicorn.jpg');
new Product('Robotic Tenticle USB drive', './assets/usb.gif');
new Product('Reverse Angled Watering Can', './assets/water-can.jpg');
new Product('Wine Connoisseur\'s Wine Glass', './assets/wine-glass.jpg');

function randImg() {

  var firstRand;
  var secondRand;
  var thirdRand;
  do {
    firstRand = Math.floor(Math.random() * products.length);
    secondRand = Math.floor(Math.random() * products.length);
    thirdRand = Math.floor(Math.random() * products.length);
  } while (lastSet.includes(firstRand) || lastSet.includes(secondRand) || lastSet.includes(thirdRand) || firstRand === secondRand || firstRand === thirdRand || secondRand === thirdRand);

  lastSet[0] = firstRand;
  lastSet[1] = secondRand;
  lastSet[2] = thirdRand;

  firstImgEl.src = products[firstRand].catPic;
  secondImgEl.src = products[secondRand].catPic;
  thirdImgEl.src = products[thirdRand].catPic;

  firstImgEl.name = products[firstRand].name;
  secondImgEl.name = products[secondRand].name;
  thirdImgEl.name = products[thirdRand].name;

  products[firstRand].views++;
  products[secondRand].views++;
  products[thirdRand].views++;

  totCl++;

  if (totCl > 25) {
    firstImgEl.removeEventListener('click', imgClk);
    secondImgEl.removeEventListener('click', imgClk);
    thirdImgEl.removeEventListener('click', imgClk);

    results();
  }
}

function imgClk(event) {
  for (var i = 0; i < products.length; i++) {
    if (event.target.name === products[i].name) {
      products[i].votes++;
      var jsonData = JSON.stringify(products[i].votes);
      localStorage.setItem('votes', jsonData);
    }
  }
  randImg();
}

// function clearVotes () {
//   for (var k = 0; k < products.length; k++) {
//     products[k].votes = 0;
//   }
//   clearViews();
// }
// function clearViews () {
//   for (var i = 0; i < products.length; i++) {
//     products[i].votes = 0;
//   }
// }

// clearVotes();
randImg();

function results() {
  for (var i = 0; i < products.length; i++) {
    var canvasEl = document.getElementById('results1').getContext('2d');
    var names = [];

    for (var j = 0; j < products.length; j++) {
      names.push(products[j].name);
    }

    var votes = [];
    for (var k = 0; k < products.length; k++) {
      votes.push(products[k].votes);

    }

    var bgClrs = [];
    for (var l = 0; l < products.length; l++) {
      bgClrs.push(products[l].bgCol);
    }

    var bdrClrs = [];
    for (var m = 0; m < products.length; m++) {
      bdrClrs.push(products[m].bdrCol);
    }

    var rChart = {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# of Votes',
          data: votes,
          backgroundColor: bgClrs,
          borderColor: bdrClrs,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
  }
  return new Chart(canvasEl, rChart);
}

firstImgEl.addEventListener('click', imgClk);
secondImgEl.addEventListener('click', imgClk);
thirdImgEl.addEventListener('click', imgClk);
