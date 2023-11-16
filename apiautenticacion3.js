document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('pregunta');
    contenedor.innerHTML = ''; 

    const apiKey = 'https://opentdb.com/api.php?amount=3'; 

    const url = `https://opentdb.com/api.php?amount=1&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const pregunta = data.results[0].question;
                contenedor.innerHTML = '<p>Pregunta:</p><p>' + pregunta + '</p>';
            } else {
                contenedor.innerHTML = '<p>No se encontraron preguntas.</p>';
            }
        })
        .catch(error => console.error('Error en la solicitud:', error));
});
