async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "36e79af5d51541c57194780892ca735d";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("result").innerHTML = "City not found!";
            return;
        }

        const output = `
            <h2>${data.name}</h2>
            <p> Temperature: ${data.main.temp} °C</p>
            <p> Condition: ${data.weather[0].description}</p>
            <p> Humidity: ${data.main.humidity}%</p>
            <p> Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("result").innerHTML = output;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data!";
    }
}