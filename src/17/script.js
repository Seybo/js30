require("expose-loader?zz!./script.js");

export const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

console.log(bands);

export function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

export const sortedBands = bands.sort( (a,b) => strip(a) > strip(b) )

document.querySelector('#bands').innerHTML = sortedBands.map(band => ` <li>${band}</li> `).join('')
