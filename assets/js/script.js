let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

    let cityValue = cityRef.value;
    // If input field is empty
    if(cityValue.length == 0) result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`
