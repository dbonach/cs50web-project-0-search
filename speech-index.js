// "reco" behaves like a pointer, it was created to abort recognition 
// when there's a click on the "white-page"
let reco;

document.addEventListener("click", function (event) {

    if (event.target.id == "white-page") {
        reco.abort();
    }
})

document.getElementById("audio-input").addEventListener("click", function () {

    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    reco = recognition;

    recognition.interimResults = true;
    recognition.continuous = true;
    document.querySelector(".listening").style.display = "block";
    recognition.lang = "en-US";

    recognition.onstart = function () {
        document.getElementById("audio-input").classList.add("animation");
    };

    recognition.onspeechend = function () {
        document.getElementById("audio-input").classList.remove("animation");
        recognition.stop();
    };

    recognition.onend = function () {
        document.querySelector(".listening").style.display = "none";
        document.getElementById("mic-circle").classList.remove("animation-3");
        document.getElementById("transcript").style.color = "#777777";
        document.getElementById("transcript").innerText = "Speak now";
    }

    recognition.onError = function () {
        recognition.stop();
    }

    recognition.onresult = function (event) {

        document.getElementById("mic-circle").classList.add("animation-3");

        let interim_transcript = "";
        let final_transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {

            if (event.results[i].isFinal) {
                document.getElementById("transcript").style.color = "#000000";
                final_transcript += event.results[i][0].transcript;
                document.getElementById("transcript").innerText = final_transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        if (interim_transcript) {
            document.getElementById("transcript").innerText = interim_transcript;

        } else if (final_transcript) {
            document.getElementById("input-index").value = final_transcript;
            document.getElementById("input-index").style.width = "435px";
            document.getElementById("clear-button").classList.remove("invisible");
            recognition.stop();
            document.GoogleSearch.submit();
        }
    };

    recognition.start();
});
