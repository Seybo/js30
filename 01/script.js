document.onreadystatechange = function () {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransion));

  function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound);

  function removeTransion(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
  }
}
