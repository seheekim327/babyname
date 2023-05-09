'use strict';
const girlNames = [

  {
    "name": "GERALDINE",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "GIA",
    "totalnumber": 21,
    "rank": 67
  },
  {
    "name": "GIANNA",
    "totalnumber": 49,
    "rank": 42
  },
  {
    "name": "GISELLE",
    "totalnumber": 38,
    "rank": 51
  },
  {
    "name": "GRACE",
    "totalnumber": 36,
    "rank": 53
  },
  {
    "name": "GUADALUPE",
    "totalnumber": 26,
    "rank": 62
  },
  {
    "name": "HAILEY",
    "totalnumber": 126,
    "rank": 8
  },
  {
    "name": "HALEY",
    "totalnumber": 14,
    "rank": 74
  },
  {
    "name": "HANNAH",
    "totalnumber": 17,
    "rank": 71
  },
  {
    "name": "HAYLEE",
    "totalnumber": 17,
    "rank": 71
  },
  {
    "name": "HAYLEY",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "HAZEL",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "HEAVEN",
    "totalnumber": 15,
    "rank": 73
  },
  {
    "name": "HEIDI",
    "totalnumber": 15,
    "rank": 73
  },
  {
    "name": "HEIDY",
    "totalnumber": 16,
    "rank": 72
  },
  {
    "name": "HELEN",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "IMANI",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "INGRID",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "IRENE",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "IRIS",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "ISABEL",
    "totalnumber": 28,
    "rank": 60
  },
  {
    "name": "ISABELA",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "ISABELLA",
    "totalnumber": 331,
    "rank": 1
  },
  {
    "name": "ISABELLE",
    "totalnumber": 18,
    "rank": 70
  },
  {
    "name": "ISIS",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "ITZEL",
    "totalnumber": 27,
    "rank": 61
  },
  {
    "name": "IZABELLA",
    "totalnumber": 23,
    "rank": 65
  },
  {
    "name": "JACQUELINE",
    "totalnumber": 30,
    "rank": 58
  },
  {
    "name": "JADA",
    "totalnumber": 21,
    "rank": 67
  },
  {
    "name": "JADE",
    "totalnumber": 50,
    "rank": 41
  },
  {
    "name": "JAELYNN",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "JAMIE",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "JANELLE",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "JASLENE",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "JASMIN",
    "totalnumber": 20,
    "rank": 68
  },
  {
    "name": "JASMINE",
    "totalnumber": 41,
    "rank": 48
  },
  {
    "name": "JAYDA",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "JAYLA",
    "totalnumber": 33,
    "rank": 55
  },
  {
    "name": "JAYLAH",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "JAYLEEN",
    "totalnumber": 51,
    "rank": 40
  },
  {
    "name": "JAYLENE",
    "totalnumber": 22,
    "rank": 66
  },
  {
    "name": "JAYLIN",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "JAYLYN",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "JAZLYN",
    "totalnumber": 16,
    "rank": 72
  },
  {
    "name": "JAZMIN",
    "totalnumber": 24,
    "rank": 64
  },
  {
    "name": "JAZMINE",
    "totalnumber": 14,
    "rank": 74
  },
  {
    "name": "JENNIFER",
    "totalnumber": 59,
    "rank": 34
  },
  {
    "name": "JESSICA",
    "totalnumber": 46,
    "rank": 44
  },
  {
    "name": "JIMENA",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "JOCELYN",
    "totalnumber": 46,
    "rank": 44
  },
  {
    "name": "JOHANNA",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "JOSELYN",
    "totalnumber": 30,
    "rank": 58
  },
  {
    "name": "JULIA",
    "totalnumber": 22,
    "rank": 66
  },
  {
    "name": "JULIANA",
    "totalnumber": 16,
    "rank": 72
  },
  {
    "name": "JULIANNA",
    "totalnumber": 21,
    "rank": 67
  },
  {
    "name": "JULIET",
    "totalnumber": 20,
    "rank": 68
  },
  {
    "name": "JULIETTE",
    "totalnumber": 15,
    "rank": 73
  },
  {
    "name": "JULISSA",
    "totalnumber": 16,
    "rank": 72
  },
  {
    "name": "KAELYN",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "KAILEY",
    "totalnumber": 20,
    "rank": 68
  },
  {
    "name": "KAILYN",
    "totalnumber": 11,
    "rank": 77
  },
  {
    "name": "KAITLYN",
    "totalnumber": 31,
    "rank": 57
  },
  {
    "name": "KAMILA",
    "totalnumber": 36,
    "rank": 53
  },
  {
    "name": "KAREN",
    "totalnumber": 41,
    "rank": 48
  },
  {
    "name": "KARLA",
    "totalnumber": 25,
    "rank": 63
  },
  {
    "name": "KATE",
    "totalnumber": 27,
    "rank": 61
  },
  {
    "name": "KATELYN",
    "totalnumber": 23,
    "rank": 65
  },
  {
    "name": "KATELYNN",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "KATHERINE",
    "totalnumber": 60,
    "rank": 33
  },
  {
    "name": "KATIE",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "KAYLA",
    "totalnumber": 62,
    "rank": 31
  },
  {
    "name": "KAYLEE",
    "totalnumber": 83,
    "rank": 20
  },
  {
    "name": "KAYLEEN",
    "totalnumber": 19,
    "rank": 69
  },
  {
    "name": "KAYLEIGH",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "KAYLIE",
    "totalnumber": 15,
    "rank": 73
  },
  {
    "name": "KAYLIN",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "KEILY",
    "totalnumber": 17,
    "rank": 71
  },
  {
    "name": "KELLY",
    "totalnumber": 41,
    "rank": 48
  },
  {
    "name": "KEYLA",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "KHLOE",
    "totalnumber": 57,
    "rank": 35
  },
  {
    "name": "KIARA",
    "totalnumber": 36,
    "rank": 53
  },
  {
    "name": "KIMBERLY",
    "totalnumber": 103,
    "rank": 13
  },
  {
    "name": "KRYSTAL",
    "totalnumber": 13,
    "rank": 75
  },
  {
    "name": "KYLEE",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "KYLIE",
    "totalnumber": 37,
    "rank": 52
  },
  {
    "name": "LAILA",
    "totalnumber": 29,
    "rank": 59
  },
  {
    "name": "LAURA",
    "totalnumber": 14,
    "rank": 74
  },
  {
    "name": "LAUREN",
    "totalnumber": 21,
    "rank": 67
  },
  {
    "name": "LAYLA",
    "totalnumber": 52,
    "rank": 39
  },
  {
    "name": "LEA",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "LEAH",
    "totalnumber": 123,
    "rank": 9
  },
  {
    "name": "LEILA",
    "totalnumber": 20,
    "rank": 68
  },
  {
    "name": "LEILANI",
    "totalnumber": 33,
    "rank": 55
  },
  {
    "name": "LESLEY",
    "totalnumber": 12,
    "rank": 76
  },
  {
    "name": "LESLIE",
    "totalnumber": 66,
    "rank": 27
  },
  {
    "name": "LESLY",
    "totalnumber": 16,
    "rank": 72
  },
  {
    "name": "LEYLA",
    "totalnumber": 10,
    "rank": 78
  },
  {
    "name": "LIA",
    "totalnumber": 26,
    "rank": 62
  },
  {
    "name": "LIANA",
    "totalnumber": 18,
    "rank": 70
  }
]

const cardsContainer = document.querySelector('.tinder--cards')

girlNames.forEach(girl => {
  const currentCard = document.createElement('div')
  currentCard.classList.add('tinder--card')
  const convertedToTitleCase = titleCase(girl.name);
  var currentTotal = girl.totalnumber;
  var currentRank = girl.rank;
  console.log(currentTotal)
  currentCard.innerHTML = `
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>${convertedToTitleCase}</h3>
    </div> 
    <div class="flip-card-back">
      <p>${currentTotal}</p>
      <p>${currentRank}</p>
    </div> 
  </div>
  `
  currentCard.dataset.name = convertedToTitleCase;
  cardsContainer.appendChild(currentCard);

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
  // hammertime.on('click', function (event) {
  //   hammertime.innerHTML = `
  //   <p>${girl.totalnumber}</p>
  //   `
  // });
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