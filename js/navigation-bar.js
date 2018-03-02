function collapseNavigationBar() {
    var x = document.getElementById("navigation-elements");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        changeTextOpenedState();
    } else {
        x.className = x.className.replace(" w3-show", "");
        changeTextClosedState();
    }
}

function changeTextClosedState() {
    var x = document.getElementById("navigation-collapse-button");
    x.innerHTML = "Menu";
}

function changeTextOpenedState() {
    var x = document.getElementById("navigation-collapse-button");
    x.innerHTML = "Close";
}