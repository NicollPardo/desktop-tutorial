document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = ''; 

    const apiKey = 'PLAK8e812ec5280142de8838c39246b77e90'; 
    const baseUrl = 'https://api.planet.com';

    const url = `${baseUrl}/data/v1/quick-search`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(apiKey + ':'),
        },
        body: JSON.stringify({
            "name": "example_query",
            "item_types": ["PSScene"],
            "filter": {
                "type": "DateRangeFilter",
                "field_name": "acquired",
                "config": {
                    "gte": "2022-01-01T00:00:00Z",
                    "lte": "2022-12-31T23:59:59Z"
                }
            }
        }),
    })
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = '<p>Respuesta:</p><pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => console.error('Error en la solicitud:', error));
});
