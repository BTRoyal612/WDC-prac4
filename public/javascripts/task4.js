function getTimestamp() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("time-stamp").innerText = "This page was last view by " + this.responseText;
        }
    }

    xhttp.open("GET", "/last.txt", true);

    xhttp.send();
}

function getColor() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var changeColor = this.responseText;
            var heading = document.getElementById("color-head");
            heading.innerHTML = changeColor;
            heading.style.color = changeColor;
        }
    }

    xhttp.open("GET", "/color.txt", true);

    xhttp.send();
}

function getTimelist() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var timelist = JSON.parse(this.responseText);
            var list = document.getElementById("time-list");
            for (let e of timelist) {
                var etime = document.createElement("li");
                etime.appendChild(document.createTextNode(e));
                list.appendChild(etime);
            }

        }
    }

    xhttp.open("GET", "/log.json", true);

    xhttp.send();
}

function updateTimelist() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var timelist = JSON.parse(this.responseText);
            var list = document.getElementById("time-list");
            list.innerHTML = "";
            for (let e of timelist) {
                var etime = document.createElement("li");
                etime.appendChild(document.createTextNode(e));
                list.appendChild(etime);
            }

        }
    };

    xhttp.open("GET", "/log-ro.json", true);

    xhttp.send();
}

function getContact() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = String(this.responseText);
        }
    }

    xhttp.open("GET", "/contact.ajax", true);

    xhttp.send();
}

function getSearch() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = String(this.responseText);
        }
    }

    xhttp.open("GET", "/search.ajax", true);

    xhttp.send();
}

function getAbout() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = String(this.responseText);
        }
    }

    xhttp.open("GET", "/about.ajax", true);

    xhttp.send();
}

function getAccept() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getContent();
        }
    }

    xhttp.open("GET", "/accept", true);

    xhttp.send();
}

function getContent() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("terms-conditions").innerHTML = String(this.responseText);
        }
    }

    xhttp.open("GET", "/content.ajax", true);

    xhttp.send();
}