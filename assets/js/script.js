let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

// Function to fetch weather details from api and display them
let getWeather = () => {
    let cityValue = cityRef.value;
    // If input field is empty
    if(cityValue.length == 0) result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`
    else{
        // If input field is NOT empty
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
        fetch(url).then((resp) => resp.json()).
        then(data => {
            // If city name is valid
            console.log(data.weather[0].icon)
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="description">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>
            `
        }).catch(() => {
            // If city name is not valid
            result.innerHTML = `<h3 class="msg">City not found!</h3>`
        })
    }
}

window.addEventListener('load', getWeather);
searchBtn.addEventListener("click", getWeather);
