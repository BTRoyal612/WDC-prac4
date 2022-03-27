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
            var color = this.responseText;
            var heading = document.getElementById("color-head");
            heading.innerText = color;
            heading.style.color = color;
        }
    }

    xhttp.open("GET", "/color.txt", true)

    xhttp.send();
}