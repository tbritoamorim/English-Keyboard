var whatWasAsked = document.getElementById('sentence');
var question;
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove("playing");
}
function playSound(event) {
  const AUDIO = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const KEY = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const WORD = document.querySelector(`kbd[data-key="${event.keyCode}"]`);
  if (!AUDIO) return;
  question = WORD.innerText.toUpperCase();
  if (whatWasAsked.value.split(" ").length < 4) {
    whatWasAsked.value += (question + " ");
    checkSentence(whatWasAsked.value);
  }
  KEY.classList.add("playing");
  AUDIO.currentTime = 0;
  AUDIO.play();
}
function checkSentence(sentence) {
  switch (sentence) {
    case "DO SHE ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DO HE ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DO IT ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DOES I ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DOES YOU ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DOES WE ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
    case "DOES THEY ":
      alert("wrong");
      whatWasAsked.value = "";
      break;
  }
}
function resetQuestion() {
  whatWasAsked.value = "";
}

const KEYS = Array.from(document.getElementsByClassName('key'));
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
