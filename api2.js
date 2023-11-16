document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('imagenes');
    contenedor.innerHTML = ''; 

    const apiKey = 'br_pTAJMOoSXO9E9vb24skNt_kx6nttFItCccCiXMzc';

    fetch(`https://api.unsplash.com/photos/random?count=3&client_id=${apiKey}`)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                let imgElement = document.createElement('img');
                imgElement.src = image.urls.regular;
                imgElement.alt = image.alt_description;



                contenedor.appendChild(imgElement);
                
                
                contenedor.appendChild(document.createElement('hr'));
            });
        })
        .catch(error => console.error('Error al obtener imágenes:', error));
});
