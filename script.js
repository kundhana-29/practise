
var form = document.getElementById("form");
var list = document.getElementById("list");

form.onsubmit = function(e) {
    e.preventDefault();

    var n = document.getElementById("name").value;
    var r = document.getElementById("roll").value;
    var d = document.getElementById("dept").value;
    var m = document.getElementById("marks").value;

    if (m < 0 || m > 100) {
        alert("Enter marks between 0 and 100");
        return;
    }

    var row = list.insertRow();
    row.innerHTML = "<td>" + n + "</td><td>" + r +
        "</td><td>" + d + "</td><td>" + m +
        "</td><td><button onclick='this.parentElement.parentElement.remove()'>Delete</button></td>";

    form.reset();
};
