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
            let ol = document.getElementById("results");
            let li = document.createElement("li");
            li.setAttribute('id',entry.name);
            let population = entry.population;
            population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let text =  entry.name + "  :  " + population;
            li.appendChild(document.createTextNode(text));
            ol.appendChild(li);
        })
    }
    else 
    {
        console.log(`Status Code: ${xhr.status} - ${xhr.statusText}`);
    }
}; 





