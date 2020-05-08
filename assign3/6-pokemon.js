
const url = 'https://pokeapi.co/api/v2/pokemon/';

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
            let name = (result.name).toUpperCase();
            document.getElementById("name").innerHTML += name + " ,  "
        });
   }
        
    }
    catch(error)
    {
        console.log('Request failed', error);
    }
};

getDataAsync(url);   
