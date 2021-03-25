document.getElementById("first").setAttribute("type", "button");

document.getElementById("input").addEventListener("input", function(event) {
    if (document.getElementById("input").value) {
        document.getElementById("first").setAttribute("type", "submit");
    }
    else {
        document.getElementById("first").setAttribute("type", "button");
    }
});
