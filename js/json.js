let JSON = {
  cards: [
    {
      title: 'Etherium',
      img: './assets/img/currency-L.png',
      percentChange: true,
      style: 'radial-gradient(circle closest-corner at 59% 29%, rgba(255,255,255,0.6), transparent 82%), linear-gradient( 160deg, #2e4a35, #445e4b, #445e4b 40%, #445e4b 40%, #2d4934 40% )',
      price: '$16 234.32',
      hour: '16%',
      day: '-22%',
      week: '6%',
      month: '26%'
    },
    {
      title: 'Litecoin',
      img: './assets/img/currency-L.png',
      percentChange: true,
      style: 'radial-gradient(circle closest-corner at 59% 29%, rgba(255,255,255,0.6), transparent 82%), linear-gradient( 160deg, #3a3a3a, #808080, #808080 40%, #808080 40%, #343434 40% )',
      price: '$62 543.11',
      hour: '6%',
      day: '-12%',
      week: '14%',
      month: '32%'
    },
    {
      title: 'Bitcoin',
      img: './assets/img/currency-L.png',
      percentChange: false,
      style: 'radial-gradient(circle closest-corner at 59% 29%, rgba(255,255,255,0.6), transparent 82%), linear-gradient( 160deg, #3c1d0b, #765230, #765230 40%, #765230 40%, #301103 40% )',
      price: '$22 747.27',
      hour: '16%',
      day: '-22%',
      week: '-6%',
      month: '43%'
    }
  ] 
};

function clone(elem, location) {
  let cloned = elem.cloneNode(true);
  location.appendChild(cloned);
};
let container = document.getElementsByClassName('currency-type')[0];
let card = document.getElementsByClassName('currency-type-card');
let allElems = document.getElementsByTagName('div');

function parseDom(json) {
  
  for(i in json) {
    let value = json[i];
    
    if(i != 0) clone(card[0], container);

    let 
        titleCard = card[i].querySelector('.currency-type-card-title'),
        styleCard = card[i],
        priceValue = card[i].querySelector('.price .value'),
        hourValue = card[i].querySelector('.hour .value'),
        dayValue = card[i].querySelector('.day .value'),
        weekValue = card[i].querySelector('.week .value'),
        monthValue = card[i].querySelector('.month .value');

    titleCard.innerHTML = value.title;
    styleCard.style.background = value.style;
    priceValue.innerHTML = value.price;
    hourValue.innerHTML = value.hour;
    dayValue.innerHTML = value.day;
    weekValue.innerHTML = value.week;
    monthValue.innerHTML = value.month;
 
  }
}

parseDom(JSON.cards)