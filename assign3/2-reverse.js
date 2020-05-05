function reverse() {
    var number = document.getElementById("input").value;
    number = number + "";
    alert(number.split("").reverse().join(""));
}

