var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
         var data = JSON.parse(request.response);
         console.log(data);

         const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log(`Total population of all countries: ${totalPopulation}`);
};