// Current Weather forecast api //
// document.addEventListener("DOMContentLoaded", function () {
//     var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var weatherIcon = document.querySelector('.weather-icon'); 
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";
//     calll.addEventListener("click", function () {
//         var location = place.value;
//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";   
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             alert("Please enter a city!")
//             return;
//         }
//         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//     if(data.weather[0].main == "Clouds"){
//         weatherIcon.src="../pics/clouds.png"
//     }
//     else if(data.weather[0].main == "Clear"){
//         weatherIcon.src="../pics/clear.png"
//         }
//         else if(data.weather[0].main == "Rain"){
//             weatherIcon.src="../pics/rain.png"
//             }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src="../pics/drizzle.png"
//         }
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.src="../pics/mist.png"
//             }

// } else {
//     alert("City cannot be found.");
// }
//             })
//             .catch(error => alert("An error occurred. Please try again later."));
//     })
// });


// // Current Weather forecast api can be fetched //

// // 6 days Weather forecast api //


// document.addEventListener("DOMContentLoaded", function () {
//     // var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var weatherIcon = document.querySelector('.weather-icon'); 
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";
//     calll.addEventListener("click", function () {
//         var location = place.value;
//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";   
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             alert("Please enter a city!")
//             return;
//         }
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.temp-1').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.temp-2').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.temp-3').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.temp-4').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.temp-5').innerHTML = Math.round(data.main.temp) + "°C";
//     // document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     // document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//     if(data.weather[0].main == "Clouds"){
//         weatherIcon.src="../pics/clouds.png"
//     }
//     else if(data.weather[0].main == "Clear"){
//         weatherIcon.src="../pics/clear.png"
//         }
//         else if(data.weather[0].main == "Rain"){
//             weatherIcon.src="../pics/rain.png"
//             }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src="../pics/drizzle.png"
//         }
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.src="../pics/mist.png"
//             }

// } else {
//     alert("City cannot be found.");
// }
//             })
//             .catch(error => alert("An error occurred. Please try again later."));
//     })
// });


// document.addEventListener("DOMContentLoaded", function () {
//     var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var weatherIcon = document.querySelector('.weather-icon'); 
//     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = days[d.getDay()];
// document.getElementById("demo").innerHTML = day;
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";

//     calll.addEventListener("click", function () {
//         var location = place.value;
//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";   
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             document.querySelector('.city-1').innerHTML = "";   
//             document.querySelector('.city-2').innerHTML = "";   
//             document.querySelector('.city-3').innerHTML = "";   
//             document.querySelector('.city-4').innerHTML = "";   
//             document.querySelector('.city-5').innerHTML = "";   
//             document.querySelector('.temp-1').innerHTML = "";
//             document.querySelector('.temp-2').innerHTML = "";
//             document.querySelector('.temp-3').innerHTML = "";
//             document.querySelector('.temp-4').innerHTML = "";
//             document.querySelector('.temp-5').innerHTML = "";
//             alert("Please enter a city!");
//             return;
//         }

//         // Current Weather Forecast API
//         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//                     document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//                     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//                     if (data.weather[0].main == "Clouds") {
//                         weatherIcon.src = "../pics/clouds.png";
//                     } else if (data.weather[0].main == "Clear") {
//                         weatherIcon.src = "../pics/clear.png";
//                     } else if (data.weather[0].main == "Rain") {
//                         weatherIcon.src = "../pics/rain.png";
//                     } else if (data.weather[0].main == "Drizzle") {
//                         weatherIcon.src = "../pics/drizzle.png";
//                     } else if (data.weather[0].main == "Mist") {
//                         weatherIcon.src = "../pics/mist.png";
//                     }
//                 } else {
//                     alert("City cannot be found.");
//                 }
//             })
//             .catch(error => alert("An error occurred. Please try again later."));

//         // 6 days Weather Forecast API
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === "200") {
//                     // Access the data for the 6 days forecast here and update your elements accordingly
//                     // document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.city-1').innerHTML = data.city.name;
//                     document.querySelector('.city-2').innerHTML = data.city.name;
//                     document.querySelector('.city-3').innerHTML = data.city.name;
//                     document.querySelector('.city-4').innerHTML = data.city.name;
//                     document.querySelector('.city-5').innerHTML = data.city.name;
//                     document.querySelector('.temp-1').innerHTML = Math.round("data:1699369200".main.temp) + "°C";
//                     document.querySelector('.temp-2').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.temp-3').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.temp-4').innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector('.temp-5').innerHTML = Math.round(data.main.temp) + "°C";
//                 } else {
//                     alert("City cannot be found for 6 days forecast.");
//                 }
//             })
//             .catch(error => alert("An error occurred for 6 days forecast. Please try again later."));
//     });
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//     var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";
//     var weatherIcon = document.querySelector('.weather-icon'); // Reference to the image element

//     calll.addEventListener("click", function () {
//         var location = place.value;
//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             weatherIcon.src = ""; // Clear the weather icon
//             alert("Please enter a city!")
//             return;
//         }
//         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//                     document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//                     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";

//                     // Update the weather icon based on the weather condition (example icons)
//                     // You may need to replace these example URLs with actual weather icons
//                     weatherIcon.src = getWeatherIconURL(data.weather[0].icon);
//                 } else {
//                     alert("City not found. Please check and try again.");
//                 }
//             })
//             .catch(error => alert("An error occurred. Please try again later."));
//     });

//     // Define a function to get the weather icon URL based on the icon code
//     function getWeatherIconURL(iconCode) {
//         // Replace these example URLs with actual weather icon URLs based on your source
//         // You can find weather icons from various sources like OpenWeatherMap or other providers
//         return `https://example.com/weather-icons/${iconCode}.png`;
//     }
// });

// Update HTML elements with weather data
//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
// } else {
//     alert("City not found. Please check and try again.");
// }
// const apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";
// const apiUrl = "https://v1.nocodeapi.com/weartheet/ow/qWXxwvsxuQbQywUI/byCityName?q=Lahore";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log("data");
// }

// var place = document.querySelector('.input-value');
// var calll = document.querySelector('.call');
// var location = place.value; // Get the user's input from the 'input-value' field
// if (location.trim() === "") {
//     alert("Please enter a city!");
//     return;
// }

// var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b"; // Replace with your API key

// calll.addEventListener("click", function () {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => alert("Please correct your city!"));
// });
// async function checkWeather(){
//     const response = await fetch(result);

//     document.querySelector('.city').innerHTML = result.name;
//     document.querySelector('.humidity').innerHTML = result.main.humidity;
//     document.querySelector('.wind').innerHTML = result.main.wind;
// }
//     city = 

// var place = document.querySelector('.input-value');
// var calll = document.querySelector('.call');
// var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b"; 

// calll.addEventListener("click", function () {
//     var location = place.value; 
//     if (location.trim() === "") {
//         document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.humidity').innerHTML =data.main.humidity;
//     document.querySelector('.wind').innerHTML = data.main.wind;
//         alert("Please enter a city!");
//         return;
//     }

//     fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => alert("Please correct your city!"));
// });


// var place = document.querySelector('.input-value');
// var calll = document.querySelector('.call');
// var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";

// calll.addEventListener("click", function () {
//     var location = place.value;

//     if (location.trim() === "") {
//         document.querySelector('.city').innerHTML = "return.name";
//         document.querySelector('.humidity').innerHTML = "";
//         document.querySelector('.wind').innerHTML = "";
//         alert("Please enter a city!");
//         return;
//     }

//     fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//         // Update HTML elements with weather data
//         document.querySelector('.city').innerHTML = return.name;
//         document.querySelector('.humidity').innerHTML = data.main.humidity;
//         document.querySelector('.wind').innerHTML = data.wind.speed;
//     })
//     .catch(error => alert("Please correct your city!"));
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";

//     calll.addEventListener("click", function () {
//         var location = place.value;

//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             alert("Please enter a city!");
//             return;
//         }

//         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 // Update HTML elements with weather data
//                 document.querySelector('.city').innerHTML = data.name;
//                 document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//                 document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//                 document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//             } else {
//                 alert("City not found. Please check and try again.");
//             }
//         })
//         .catch(error => alert("An error occurred. Please try again later."));
//     });
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//     var place = document.querySelector('.input-value');
//     var calll = document.querySelector('.call');
//     var weatherIcon = document.querySelector('.weather-icon');
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     const d = new Date();
//     let day = days[d.getDay()];
//     document.getElementById("demo").innerHTML = day;
//     var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";

//     calll.addEventListener("click", function () {
//         var location = place.value;
//         if (location.trim() === "") {
//             document.querySelector('.city').innerHTML = "";
//             document.querySelector('.humidity').innerHTML = "";
//             document.querySelector('.wind').innerHTML = "";
//             document.querySelector('.temp').innerHTML = "";
//             document.querySelector('.city-1').innerHTML = "";
//             document.querySelector('.city-2').innerHTML = "";
//             document.querySelector('.city-3').innerHTML = "";
//             document.querySelector('.city-4').innerHTML = "";
//             document.querySelector('.city-5').innerHTML = "";
//             document.querySelector('.temp-1').innerHTML = "";
//             document.querySelector('.temp-2').innerHTML = "";
//             document.querySelector('.temp-3').innerHTML = "";
//             document.querySelector('.temp-4').innerHTML = "";
//             document.querySelector('.temp-5').innerHTML = "";
//             alert("Please enter a city!");
//             return;
//         }

//         // Current Weather Forecast API
//         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     document.querySelector('.city').innerHTML = data.name;
//                     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//                     document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
//                     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//                     if (data.weather[0].main == "Clouds") {
//                         weatherIcon.src = "../pics/clouds.png";
//                     } else if (data.weather[0].main == "Clear") {
//                         weatherIcon.src = "../pics/clear.png";
//                     } else if (data.weather[0].main == "Rain") {
//                         weatherIcon.src = "../pics/rain.png";
//                     } else if (data.weather[0].main == "Drizzle") {
//                         weatherIcon.src = "../pics/drizzle.png";
//                     } else if (data.weather[0].main == "Mist") {
//                         weatherIcon.src = "../pics/mist.png";
//                     }
//                 } else {
//                     alert("City cannot be found.");
//                 }
//             })
//             .catch(error => alert("An error occurred. Please try again later."));

//         // 5 days Weather Forecast API
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${location}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === "200") {
//                     for (let i = 0; i < 5; i++) {
//                         const forecastData = data.list[i * 5]; 
//                         const tempElement = document.querySelector(`.temp-${i + 1}`);
//                         const cityElement = document.querySelector(`.city-${i + 1}`);

//                         tempElement.innerHTML = Math.round(forecastData.main.temp) + "°C";
//                         cityElement.innerHTML = location;
//                     }
//                 } else {
//                     alert("City cannot be found for 5 days forecast.");
//                 }
//             })
//             .catch(error => alert("An error occurred for 5 days forecast. Please try again later."));
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var place = document.querySelector('.input-value');
    var calll = document.querySelector('.call');
    var weatherIcon = document.querySelector('.weather-icon');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = days[d.getDay()];
    document.getElementById("demo").innerHTML = day;
    var apiKey = "06227c2e2b8a35943a5e786b8ca37c4b";

    calll.addEventListener("click", function () {
        var location = place.value;
        if (location.trim() === "") {
            document.querySelector('.city').innerHTML = "";
            document.querySelector('.humidity').innerHTML = "";
            document.querySelector('.wind').innerHTML = "";
            document.querySelector('.temp').innerHTML = "";
            document.querySelector('.city-1').innerHTML = "";
            document.querySelector('.city-2').innerHTML = "";
            document.querySelector('.city-3').innerHTML = "";
            document.querySelector('.city-4').innerHTML = "";
            document.querySelector('.city-5').innerHTML = "";
            document.querySelector('.temp-1').innerHTML = "";
            document.querySelector('.temp-2').innerHTML = "";
            document.querySelector('.temp-3').innerHTML = "";
            document.querySelector('.temp-4').innerHTML = "";  
            document.querySelector('.temp-5').innerHTML = "";
            alert("Please enter a city!");
            return;
        }

        // Current Weather Forecast API
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.querySelector('.city').innerHTML = data.name;
                    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
                    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
                    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
                    if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "../pics/clouds.png";
                    } else if (data.weather[0].main == "Clear") {
                        weatherIcon.src = "../pics/clear.png";
                    } else if (data.weather[0].main == "Rain") {
                        weatherIcon.src = "../pics/rain.png";
                    } else if (data.weather[0].main == "Drizzle") {
                        weatherIcon.src = "../pics/drizzle.png";
                    } else if (data.weather[0].main == "Mist") {
                        weatherIcon.src = "../pics/mist.png";
                    }
                } else {
                    alert("City cannot be found.");
                }
            })
            .catch(error => alert("An error occurred. Please try again later."));

        // 5 days Weather Forecast API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${location}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "200") {
                    document.querySelector('.city-1').innerHTML = data.city.name;
                    document.querySelector('.city-2').innerHTML = data.city.name;
                    document.querySelector('.city-3').innerHTML = data.city.name;
                    document.querySelector('.city-4').innerHTML = data.city.name;
                    document.querySelector('.city-5').innerHTML = data.city.name;
                    for (let i = 0; i < 5; i++) {
                        const forecastData = data.list[i * 5]; 
                        const tempElement = document.querySelector(`.temp-${i + 1}`);
                        const dayElement = document.querySelector(`.day-${i + 1}`);

                        const forecastDate = new Date(forecastData.dt * 1000); 
                        const dayName = days[forecastDate.getDay()];

                        tempElement.innerHTML = Math.round(forecastData.main.temp) + "°C";
                        dayElement.innerHTML = dayName;
                    }
                } else {
                    alert("City cannot be found for 5 days forecast.");
                }
            })
            .catch(error => alert("An error occurred for 5 days forecast. Please try again later."));
    });
});



