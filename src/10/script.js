const css = require('./style.scss');

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

document.addEventListener("DOMContentLoaded", function(event) {
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
});

function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked && lastChecked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    })     
  }
}
