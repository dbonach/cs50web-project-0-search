let clicked = false;

document.addEventListener("mousedown", function (event) {

    if (event.target.id == "advanced-button") {
        clicked = true;
    }
})

document.addEventListener("mouseup", function (event) {

    if (clicked) {
        document.getElementById("advanced-button").setAttribute("class", "active");
        clicked = false;
    }
    else {
        document.getElementById("advanced-button").setAttribute("class", "deactivated");
    }
})
