document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('respuesta');
    contenedor.innerHTML = ''; 

    const token = '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'; 

    const url = 'https://api.github.com/user'; 

    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = '<p>Respuesta:</p><pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => console.error('Error en la solicitud:', error));
});
