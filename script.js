document.addEventListener("click", function(event) {
    let firstButton = document.getElementById("first");
    let secondButton = document.getElementById("second");

    if (firstButton.className == "active") {
        firstButton.setAttribute("class","button");
    } 
    else if (secondButton.className == "active") {
        secondButton.setAttribute("class","button");
    }

    if (event.target.id == "first") {
        event.target.setAttribute("class","active");
    } 
    else if (event.target.id == "second") {
        event.target.setAttribute("class","active");
    }
})

