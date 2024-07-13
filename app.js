const button = document.querySelector("#search-btn");
const input = document.querySelector("#field-input");
const city_name = document.querySelector("#city-name");
const city_condition = document.querySelector("#city-condition");
const city_temperature = document.querySelector("#city-temperature");
const city_time = document.querySelector("#city-time");

async function getData(cityName) {
    const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=23b6384f73304110b7685254241307&q=${cityName}&aqi=yes`);
    return await promise.json()
    
    
}

button.addEventListener("click",async()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    city_name.innerHTML = `CityName : ${result.location.name} - ${result.location.region} , ${result.location.country}`,
    city_time.innerHTML = `Time : ${result.location.localtime}`,
    city_temperature.innerHTML = `Temperature : ${result.current.temp_c} Centigrade`
    city_condition.innerHTML = `Condition : ${result.current.condition.text} `
});