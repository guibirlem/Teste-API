async function obterClima() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = '811c6fd4df54aaf328eba39b0cfd630f'; //utilizar chave da api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
//lang pt br para as informaçoes virem em portugues

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        if (data.cod == 200) {
            document.getElementById('nome-cidade').textContent = data.name;
            document.getElementById('temperatura').textContent = `${data.main.temp} °C`;
            document.getElementById('descricao-clima').textContent = data.weather[0].description;
            document.getElementById('umidade').textContent = `${data.main.humidity} %`;
        } else if (data.cod == 404) {
            document.getElementById('resultado-clima').innerHTML = `<p>Cidade não encontrada.</p>`;
        } else {
            document.getElementById('resultado-clima').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('resultado-clima').innerHTML = `<p>Algo deu errado. Por favor, tente novamente mais tarde.</p>`;
    }
}


//https://api.openweathermap.org/data/2.5/weather?q=NOME%20&appid=811c6fd4df54aaf328eba39b0cfd630f&units=metric&lang=pt_br
//substitiu nome$20 pelo nome da cidade para ver o JSON, não esquecer o $20
//https://api.openweathermap.org/data/2.5/weather?q=Capao%20da%20Canoa&appid=811c6fd4df54aaf328eba39b0cfd630f&units=metric&lang=pt_br
