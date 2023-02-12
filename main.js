import data from './data.json' assert { 'type': 'json' };

const activityElm = document.querySelector('#activity');
const timeElm = document.querySelector('#time');
const unitsElm = document.querySelector('#units');
const resultElm = document.querySelector('#result');

function calcResult(event) {
  event.preventDefault();
  let activityValue = activityElm.value;
  let timeValue = Number(timeElm.value);
  let unitValue = unitsElm.value;

  let activityItem = data.data.find((item) => item.activity === activityValue);
  let distance = Number(activityItem.distance);

  if (unitValue === 'miles') {
    distance = distance * 0.62137;
  }

  resultElm.innerHTML = `<p>Result: ${
    Math.round(timeValue * distance * 10) / 10
  } ${unitValue}</p>`;
}

const formElm = document.querySelector('#calculator');
formElm.addEventListener('submit', calcResult);
