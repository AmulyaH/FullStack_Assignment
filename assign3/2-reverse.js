function reverse() {
    var number = document.getElementById("input").value;
    const intRev = number.toString().split('').reverse().join('');
    alert(parseInt(intRev) * Math.sign(number));
}


