
const url = 'https://pokeapi.co/api/v2/pokemon/';

let div = document.getElementById("result");

let getDataAsync = async (url) => 
{
    try 
    {
        let response = await fetch(url);
        let data = await response.json();
       
        data.results.forEach(function(result) {
            let span = document.createElement("span");
            let br = document.createElement("br");
            let name = (result.name).toUpperCase();
            span.setAttribute('id',name);
            span.appendChild(document.createTextNode(name));
            span.appendChild(br);
            div.appendChild(span);
        });
        
    }
    catch(error)
    {
        console.log('Request failed', error);
    }
};

getDataAsync(url);             