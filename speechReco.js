document.getElementById("audio-input").addEventListener("click", function() {

    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onstart = function() {
        document.querySelector("#audio-input").style.borderRadius = "50%";
        document.querySelector("#audio-input").style.boxShadow = "0 0 4px 2px red";

        console.log("Listening");
    };

    recognition.onspeechend = function() {
        console.log("Done...");
        recognition.stop();
    };

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        let confidence = event.results[0][0].confidence;
        console.log(transcript);
        console.log(confidence);

        document.getElementById("image-input").value = transcript;
        document.getElementById("image-input").style.width = "340px";
        document.getElementById("clear-button").classList.remove("invisible");

        document.querySelector("#audio-input").style.borderRadius = "none";
        document.querySelector("#audio-input").style.boxShadow = "none";

        document.GoogleSearch.submit();
    };

    recognition.start();
});
