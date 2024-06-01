var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
         var data = JSON.parse(request.response);
         console.log(data);
        
         let filterData = data.filter(country => country.population >= 200000).map(country => country.name.common);
         console.log(filterData);


}
