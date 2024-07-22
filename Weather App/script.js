 
 
 // OpenWeather API key
const apiKey = "abbce11691d0f89b9bb16710296f7ec5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Select the fields
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// Async function to fetch and display weather information for a given city
async function checkWeather(city){
    const response = await fetch( apiURL + city + `&appid=${apiKey}`);


    // Check if the response status is 404 (city not found)
    if( response.status == 404){
        // Display error message and hide weather information
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{

        // Parse the response data to JSON
        var data = await response.json();
   
        // Update the DOM with the fetched weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    

         // Change the weather icon based on the weather condition
        if( data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if( data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        } else if( data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if( data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        

        // Display the weather information and hide any error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}


// Add event listener to the search button to trigger the weather check when clicked
/*searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});*/

function handleSearch() {
    const city = searchBox.value;
    // Call your weather checking function here
    checkWeather(city);
     
}
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
});

// Add event listener for the search button click
searchBtn.addEventListener("click", handleSearch);

