document.getElementById('consulta').addEventListener('click', () => {
    const contenedor = document.getElementById('usuarios');
    contenedor.innerHTML = ''; // Limpiamos el contenedor antes de agregar nuevos elementos

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                let nombre = document.createElement('p');
                nombre.innerHTML = `Nombre: ${user.name}`;

                let email = document.createElement('p');
                email.innerHTML = `Email: ${user.email}`;

                let empresa = document.createElement('p');
                empresa.innerHTML = `Empresa: ${user.company.name}`;

                contenedor.appendChild(nombre);
                contenedor.appendChild(email);
                contenedor.appendChild(empresa);
                
                // Agregamos un separador entre usuarios
                contenedor.appendChild(document.createElement('hr'));
            });
        })
        .catch(error => console.error('Error al obtener usuarios:', error));
});
