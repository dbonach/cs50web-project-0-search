document.getElementById("audio-input").addEventListener("click", function() {

    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onstart = function() {
        document.getElementById("audio-input").classList.add("animation");
        console.log("Listening");
    };

    recognition.onspeechend = function() {
        document.getElementById("audio-input").classList.remove("animation");
        console.log("Done...");
        recognition.stop();
    };

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        let confidence = event.results[0][0].confidence;
        console.log(transcript);
        console.log(confidence);

        document.getElementById("input").value = transcript;
        document.getElementById("input").style.width = "340px";
        document.getElementById("clear-button").classList.remove("invisible");

        document.GoogleSearch.submit();
    };

    recognition.start();
});
