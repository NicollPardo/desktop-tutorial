document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('respuesta');
    contenedor.innerHTML = ''; 

    const username = 'usuario';
    const password = 'contraseña';

    const url = 'https://httpbin.org/basic-auth/' + username + '/' + password;

    fetch(url, {
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
    })
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = '<p>Respuesta:</p><pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => console.error('Error en la solicitud:', error));
});
