const https = require('https');
let data = '';
const port = 5000;

var express = require('express'),
    app = express();

var lookup = {};

https.get('https://restcountries.eu/rest/v2/all', (resp) => {
  
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
     
    console.log(JSON.parse(data));
    data = JSON.parse(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.get('/main', function(req, res) {
    res.write("COUNTRY    : CAPITAL CITY" + '\n');
    data.forEach(function(entry) 
        {
            res.write(entry.name+ " : " + entry.capital + '\n')
        })
    res.send();
  });

  app.get('/populous', function(req, res) {
    res.write("COUNTRY    : POPULATION" + '\n');
    data.forEach(function(entry) 
        {
            if(entry.population > 20000000)
            {
                var population = entry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                res.write(entry.name+ " : " + population + '\n')
            }
        })
    res.send();
  });

  app.get('/regions', function(req, res) {
    data.forEach(function(entry) 
        {
            var region = entry.region;
            if(region == "")
            {
                region = "Islands"
            }
            lookup[region] = lookup[region] ? lookup[region]+1 : 1
        })
        res.write("REGION : # OF COUNTRIES" + '\n');
        for(var index in lookup) {
            
            res.write(index+ " : " + lookup[index] + '\n');
          }
        res.send();
        lookup = {};
  });

  app.listen(port);