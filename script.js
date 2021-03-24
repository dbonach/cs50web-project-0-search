let firstActive = 0;
let secondActive = 0;

document.addEventListener("click", function(event) {
    if (firstActive){
        document.getElementById("first").classList.remove("active");
        document.getElementById("first").classList.add("button");
        firstActive = 0;
    } 
    else if (secondActive) {
        document.getElementById("second").classList.remove("active");
        document.getElementById("second").classList.add("button");
        secondActive = 0;
    }

    if (event.target.id === 'first') {
        event.target.classList.remove("button");
        event.target.classList.add("active");
        firstActive = 1;
    } 
    else if (event.target.id === 'second') {
        event.target.classList.remove("button");
        event.target.classList.add("active");
        secondActive = 1;
    }
})
