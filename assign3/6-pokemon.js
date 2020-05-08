
const url = 'https://pokeapi.co/api/v2/pokemon/';

let div = document.getElementById("result");
let count = 0;

let getDataAsync = async (url) => 
{
    try 
    {
       let run =  true;
       while(run)
       {
        let response = await fetch(url);
        
        let data = await response.json(); 
        
        if(data.next)
        {
            run = true;
            url = data.next;
        }
        else{
            run = false;
        }
       
        data.results.forEach(function(result) {
            let span = document.createElement("span");
            let br = document.createElement("br");
            let name = (result.name).toUpperCase();
            count ++;
            span.setAttribute('id',name);
            span.appendChild(document.createTextNode( count + ") " + name ));
            span.appendChild(br);
            div.appendChild(span);
        });
   }
        
    }
    catch(error)
    {
        console.log('Request failed', error);
    }
};

getDataAsync(url);   
