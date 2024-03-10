function convertTextToSpeech() {
    const textInput = document.getElementById('textInput').value;


    const synth = window.speechSynthesis;

 
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(textInput);

    synth.speak(utterance);
}
