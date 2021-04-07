document.getElementById("image-search-button").setAttribute("type", "button");

document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("input").value = "";
    document.getElementById("clear-button").classList.add("invisible");
    document.getElementById("input").style.width = "390px";
    document.getElementById("image-search-button").setAttribute("type", "button");
    console.log("clicou");
});

document.getElementById("input").addEventListener("input", function() {
    document.getElementById("input").style.width = "340px";
    document.getElementById("clear-button").classList.remove("invisible");
    document.getElementById("image-search-button").setAttribute("type", "submit");

    if (!document.getElementById("input").value) {
        document.getElementById("clear-button").classList.add("invisible");
        document.getElementById("image-search-button").setAttribute("type", "button");
    };
});
