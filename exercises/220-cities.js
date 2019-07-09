// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.   

function coolCities(cities){
    // var cities = [
    //     { name: 'Los Angeles', temperature: 60.0},
    //     { name: 'Atlanta', temperature: 52.0 },
    //     { name: 'Detroit', temperature: 48.0 },
    //     { name: 'New York', temperature: 80.0 }
    //     ];
    var cool_Cities = cities.filter(function(element){
        return element.temperature < 70;
    });
    return cool_Cities;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.
function cityNames(cities){
var city_names = cities
var final_name =[];
city_names.forEach(element => {
    final_name.push(element.name)
    
});
return final_name
}