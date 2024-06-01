var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
         var data = JSON.parse(request.response);
         console.log(data);

         const usDollarCountries = data.filter(country => {
            return country.currencies && country.currencies.hasOwnProperty('USD');
          });

          usDollarCountries.forEach(country => {
            console.log(country.name.common);
          }}