async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '811c6fd4df54aaf328eba39b0cfd630f'; // Substitua por sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weather = `
                <p><strong>Cidade:</strong> ${data.name}</p>
                <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                <p><strong>Clima:</strong> ${data.weather[0].description}</p>
                <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
            `;
            document.getElementById('weather-result').innerHTML = weather;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Algo deu errado. Por favor, tente novamente mais tarde.</p>`;
    }
}
