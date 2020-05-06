const url = 'https://restcountries.eu/rest/v2/all';

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) 
    {
        let data = xhr.response;
        data.forEach(function(entry) 
        {
            var ol = document.getElementById("results");
            var li = document.createElement("li");
            li.setAttribute('id',entry.name);
            var text =  entry.name + " : " + entry.population;
            li.appendChild(document.createTextNode(text));
            ol.appendChild(li);

        })
    }
    else 
    {
        console.log(`Status Code: ${xhr.status} - ${xhr.statusText}`);
    }
};

