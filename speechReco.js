document.getElementById("audio-input").addEventListener("click", function() {

    document.querySelector("#audio-input").style.borderRadius = "50%";
    document.querySelector("#audio-input").style.boxShadow = "0 0 4px 2px #E3E3E3";
    
    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onstart = function() {
        console.log("Listening");
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        let confidence = event.results[0][0].confidence;
        console.log(transcript);
        console.log(confidence);
        document.getElementById("image-input").value = transcript;

        document.querySelector("#audio-input").style.borderRadius = "none";
        document.querySelector("#audio-input").style.boxShadow = "none";
    };

    recognition.start();
});
