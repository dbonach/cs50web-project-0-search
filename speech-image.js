document.getElementById("audio-input").addEventListener("click", function () {

    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onstart = function () {
        document.getElementById("audio-input").classList.add("animation4");
    };

    recognition.onspeechend = function () {
        document.getElementById("audio-input").classList.remove("animation4");
        recognition.stop();
    };

    recognition.onresult = function (event) {
        let transcript = event.results[0][0].transcript;

        document.getElementById("input-image").value = transcript;
        document.getElementById("input-image").style.width = "340px";
        document.getElementById("clear-button").classList.remove("invisible");

        document.GoogleSearch.submit();
    };

    recognition.start();
});
