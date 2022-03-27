function getTimestamp() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("time-stamp").innerText = "This page was last view by " + this.responseText;
        }
    }

    xhttp.open("GET", "/last.txt", true)

    xhttp.send();
}

function getColor() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var changeColor = this.responseText;
            var heading = document.getElementById("color-head");
            heading.innerText = changeColor;
            heading.style.color = changeColor;
        }
    }

    xhttp.open("GET", "/color.txt", true)

    xhttp.send();
}