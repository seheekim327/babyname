'use strict';
const boyNames = [
        {
          "name": "AARAV"
        },
        {
          "name": "AARON"
        },
        {
          "name": "ABDUL"
        },
        {
          "name": "ABDULLAH"
        },
        {
          "name": "ADAM"
        },
        {
          "name": "ADITYA"
        },
        {
          "name": "ADRIAN"
        },
        {
          "name": "AHMED"
        },
        {
          "name": "AIDAN"
        },
        {
          "name": "AIDEN"
        },
        {
          "name": "ALAN"
        },
        {
          "name": "ALEX"
        },
        {
          "name": "ALEXANDER"
        },
        {
          "name": "ALI"
        },
        {
          "name": "ALLEN"
        },
        {
          "name": "ALVIN"
        },
        {
          "name": "ANDREW"
        },
        {
          "name": "ANDY"
        },
        {
          "name": "ANSON"
        },
        {
          "name": "ANTHONY"
        },
        {
          "name": "ARJUN"
        },
        {
          "name": "ARMAAN"
        },
        {
          "name": "ARYAN"
        },
        {
          "name": "AUSTIN"
        },
        {
          "name": "AYAAN"
        },
        {
          "name": "AYDEN"
        },
        {
          "name": "BENJAMIN"
        },
        {
          "name": "BENSON"
        },
        {
          "name": "BRANDON"
        },
        {
          "name": "BRIAN"
        },
        {
          "name": "BRYAN"
        },
        {
          "name": "CALEB"
        },
        {
          "name": "CALVIN"
        },
        {
          "name": "CARSON"
        },
        {
          "name": "CHARLES"
        },
        {
          "name": "CHRISTIAN"
        },
        {
          "name": "CHRISTOPHER"
        },
        {
          "name": "CODY"
        },
        {
          "name": "CONNOR"
        },
        {
          "name": "DANIEL"
        },
        {
          "name": "DANNY"
        },
        {
          "name": "DARREN"
        },
        {
          "name": "DAVID"
        },
        {
          "name": "DEREK"
        },
        {
          "name": "DEVIN"
        },
        {
          "name": "DYLAN"
        },
        {
          "name": "EASON"
        },
        {
          "name": "EDISON"
        },
        {
          "name": "EDWIN"
        },
        {
          "name": "ELIJAH"
        },
        {
          "name": "ELVIS"
        },
        {
          "name": "ERIC"
        },
        {
          "name": "ETHAN"
        },
        {
          "name": "EVAN"
        },
        {
          "name": "FARHAN"
        },
        {
          "name": "FELIX"
        },
        {
          "name": "GABRIEL"
        },
        {
          "name": "GAVIN"
        },
        {
          "name": "GEORGE"
        },
        {
          "name": "HARRISON"
        },
        {
          "name": "HAYDEN"
        },
        {
          "name": "HENRY"
        },
        {
          "name": "IAN"
        },
        {
          "name": "IBRAHIM"
        },
        {
          "name": "ISAAC"
        },
        {
          "name": "ISHAAN"
        },
        {
          "name": "IVAN"
        },
        {
          "name": "JACK"
        },
        {
          "name": "JACKSON"
        },
        {
          "name": "JACKY"
        },
        {
          "name": "JACOB"
        },
        {
          "name": "JADEN"
        },
        {
          "name": "JAKE"
        },
        {
          "name": "JAMES"
        },
        {
          "name": "JASON"
        },
        {
          "name": "JAY"
        },
        {
          "name": "JAYDEN"
        },
        {
          "name": "JEFFREY"
        },
        {
          "name": "JEREMY"
        },
        {
          "name": "JERRY"
        },
        {
          "name": "JIA"
        },
        {
          "name": "JOHN"
        },
        {
          "name": "JOHNNY"
        },
        {
          "name": "JONATHAN"
        },
        {
          "name": "JORDAN"
        },
        {
          "name": "JOSEPH"
        },
        {
          "name": "JOSHUA"
        },
        {
          "name": "JULIAN"
        },
        {
          "name": "JUSTIN"
        },
        {
          "name": "KAI"
        },
        {
          "name": "KEVIN"
        },
        {
          "name": "KINGSLEY"
        },
        {
          "name": "KYLE"
        },
        {
          "name": "LAWRENCE"
        },
        {
          "name": "LEO"
        },
        {
          "name": "LEON"
        },
        {
          "name": "LIAM"
        },
        {
          "name": "LOGAN"
        },
        {
          "name": "LOUIS"
        }
      ]

const cardsContainer = document.querySelector('.tinder--cards')

boyNames.forEach(boy => {
  const currentCard = document.createElement('div')
  currentCard.classList.add('tinder--card')
  const convertedToTitleCase = titleCase(boy.name);
  currentCard.innerHTML = `
  <h3>${convertedToTitleCase}</h3>
  `
  currentCard.dataset.name = convertedToTitleCase;
  cardsContainer.appendChild(currentCard)
})

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}


var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});



function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];
    let cardName = card.dataset.name;
    card.classList.add('removed');

    addToList(cardName, love);

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    console.log('loved list =', lovedList);
    console.log('nope list =', nopeList)

    initCards();

    event.preventDefault();
  };
}
const lovedList = document.querySelector('#love-list');
const nopeList = document.getElementById('nope-list');
console.log(lovedList)
function addToList (name, love) {
  if (love) {
    lovedList.insertAdjacentHTML('beforeend', `<h3>${name}</h3>`)
  } else {
    nopeList.insertAdjacentHTML('beforeend', `<h3>${name}</h3>`)
  }
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);