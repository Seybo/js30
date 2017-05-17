const css = require('./style.scss');

const datasource = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [];

document.addEventListener("DOMContentLoaded", function(event) {
  const searchInput = document.querySelector('.search');

  fetch(datasource)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

  searchInput.addEventListener('keyup', displayMatches);
});

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const suggestions = document.querySelector('.suggestions');
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${place.population}</span>
      </li>
    `;
  }).join('');
  
  suggestions.innerHTML = html;
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}
