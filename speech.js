const textarea = document.querySelector('textarea');
const voiceList = document.querySelector('select');
const speechBtn = document.querySelector('button');

let synth = speechSynthesis;



const textToSpeech = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech)

    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            speech.voice = voice;
        }
    }
}


speechBtn.addEventListener("click", e => {
    e.preventDefault();
    if(textarea.value !== ''){
        textToSpeech(textarea.value);
        
     };
})

const voices = () => {
    for(let voice of synth.getVoices()){
        let selected = voice.name === 'Google US English' ? "selected" : "";
        // console.log(voice)
        const option = `<option value="${voice.name}" ${selected}>${voice.name}  ${voice.lang}</option>`
        voiceList.insertAdjacentHTML('beforeend', option) 
    }
}

synth.addEventListener('voiceschanged', voices)
