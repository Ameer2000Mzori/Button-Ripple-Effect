// selecting our elements
var effectButton = document.getElementsByClassName("effect-Button")[0];
// our functions
var fireEffect = function (e) {
    // creating our element dynamically
    var circleEl = document.createElement("div");
    circleEl.classList.add("circle");
    // getting information from our e target
    // getting client click x and y
    var x = e.clientX;
    var y = e.clientY;
    // getting our offset targets
    var buttonTop = e.target.offsetTop;
    var buttonLeft = e.target.offsetLeft;
    // calculating
    var xInside = x - buttonLeft;
    var yInside = y - buttonTop;
    console.log("this is target: ", e);
    circleEl.style.top = "".concat(yInside, "px");
    circleEl.style.left = "".concat(xInside, "px");
    // setting timeout function
    setTimeout(function () { return circleEl.remove(); }, 500);
    effectButton.appendChild(circleEl);
};
// our eventlisnters
effectButton.addEventListener("click", function (e) {
    // sending our target info to fire effect function
    fireEffect(e);
});
