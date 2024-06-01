var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
         var data = JSON.parse(request.response);
         console.log(data);

         data.forEach(country => {
            
            const name = country.name.common;
            const capital = country.capital[0];
            const flag = country.flags.png;
            console.log(`Country: ${name}, Capital: ${capital}, Flag: ${flag}`);
    })};