function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove("playing");
}
function playSound(event) {
  const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const KEY = document.querySelector(`div[data-key="${event.keyCode}"]`);
  console.log(KEY);
  if (!AUDIO) return;
  KEY.classList.add("playing");
  AUDIO.play();
}
const KEYS = Array.from(document.getElementsByClassName('key'));
console.log(KEYS);
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
