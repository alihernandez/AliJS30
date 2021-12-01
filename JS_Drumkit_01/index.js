function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        //listen for audio element with specific keyCode...
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        console.log(e.keyCode);
        console.log(audio);
        if(!audio) return; //stop function from running
        audio.currentTime = 0; //rewind to start
        audio.play();
        key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(.'key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listen for an event...
window.addEventListener('keydown', playSound);