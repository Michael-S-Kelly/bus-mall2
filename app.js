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
var voteDivEl = document.createElement('div');
var messageDivEl = document.createElement('div');
var messageEl = document.createElement('p');

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
messageDivEl.appendChild(messageEl);


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
voteDivEl.id = 'voteDiv';
messageDivEl.id = 'messageDiv';
messageEl.id = 'message';
