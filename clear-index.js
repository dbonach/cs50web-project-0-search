document.getElementById("first").setAttribute("type", "button");

document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("input-index").value = "";
    document.getElementById("clear-button").classList.add("invisible");
    document.getElementById("input-index").style.width = "485px";
    document.getElementById("first").setAttribute("type", "button");
});

document.getElementById("input-index").addEventListener("input", function () {
    document.getElementById("input-index").style.width = "435px";
    document.getElementById("clear-button").classList.remove("invisible");
    document.getElementById("first").setAttribute("type", "submit");

    if (!document.getElementById("input-index").value) {
        document.getElementById("clear-button").classList.add("invisible");
        document.getElementById("first").setAttribute("type", "button");
    };
});

