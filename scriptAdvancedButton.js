document.addEventListener("click", function(event) {

    if (event.target.id == "advanced-button") {
        event.target.setAttribute("class","active");
    }
    else {
        document.getElementById("advanced-button").setAttribute("class","deactivated");
    }
})
