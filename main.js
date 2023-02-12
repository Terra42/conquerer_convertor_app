import data from './data.json' assert { 'type': 'json' };

const activityElm = document.querySelector('#activity');
const timeElm = document.querySelector('#time');
const resultElm = document.querySelector('#result');

function calcResult(event) {
  event.preventDefault();
  let activityValue = activityElm.value;
  let timeValue = Number(timeElm.value);

  let activityItem = data.data.find((item) => item.activity === activityValue);
  let distance = Number(activityItem.distance);

  resultElm.innerHTML = `<p>Result: ${timeValue * distance} km</p>`;
}

const formElm = document.querySelector('#calculator');
formElm.addEventListener('submit', calcResult);
