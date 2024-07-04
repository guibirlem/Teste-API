async function obterClima() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = '811c6fd4df54aaf328eba39b0cfd630f'; // Substitua por sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
//lang pt br para as informaçoes virem em portugues

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('nome-cidade').textContent = data.name;
            document.getElementById('temperatura').textContent = data.main.temp;
            document.getElementById('descricao-clima').textContent = data.weather[0].description;
            document.getElementById('umidade').textContent = data.main.humidity;
        } else {
            document.getElementById('resultado-clima').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('resultado-clima').innerHTML = `<p>Algo deu errado. Por favor, tente novamente mais tarde.</p>`;
    }
}
