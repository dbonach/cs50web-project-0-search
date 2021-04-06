document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("image-input").value = "";
    document.getElementById("clear-button").classList.add("invisible");
    document.getElementById("image-input").style.width = "390px";
    console.log("clicou");
});

document.getElementById("image-input").addEventListener("input", function() {
    document.getElementById("image-input").style.width = "340px";
    document.getElementById("clear-button").classList.remove("invisible");
});
