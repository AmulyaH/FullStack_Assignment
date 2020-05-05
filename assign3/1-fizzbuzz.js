var i;
var number = "";
for (i = 1; i <= 100 ; i++) {
    if(i % 5 == 0 && i % 3 == 0)
    {
        number += 'fizzbuzz' + "<br>"
    }
    else if(i % 5 == 0 && i % 3 != 0)
    {
        number += 'buzz' + "<br>";
    }
    else if(i%3 == 0)
    {
        number += 'fizz' + "<br>";
    }
    else{
        number += i + "<br>";
    }
  }
  document.getElementById("results").innerHTML = number;