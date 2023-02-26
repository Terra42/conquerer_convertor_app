import './style.css';
import data from './data.json';
import { options } from './options.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.css';

const resultElm = document.querySelector('#result');
const activityElm = document.querySelector('#activity');
const timeElm = document.querySelector('#time');
const unitsElm = document.querySelector('#units');

document.addEventListener('DOMContentLoaded', function () {
  M.Autocomplete.init(activityElm, options);
});

const formElm = document.querySelector('#form');

formElm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (isInputValid(activityElm.value) >= 0) {
    console.log(isInputValid(activityElm.value));
  } else {
    resultElm.innerHTML = `<p>Activity not found</p>`;
  }

  console.log(unitsElm.checked); //false = km, true = miles
});

const isInputValid = (value) => {
  const activities = data.data.map((activity) => activity.name);
  return activities.findIndex((activity) => activity === value);
};

/* 
const activityElm = document.querySelector('#activity');



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
formElm.addEventListener('submit', calcResult); */
