document.getElementById('registro').addEventListener('submit', function (e) {
    
    e.preventDefault()

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value

    // Creo un objeto con los datos del formulario
    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Realiza la solicitud HTTP POST 
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Muestra el estado de la respuesta
        document.getElementById('respuesta').textContent = `Estado del servidor: ${response.status}`
        return response.json()
    })
    .then(data => {
        // Muestra la respuesta del servidor
        console.log(data)
    })
    .catch(error => {
        
        console.error('Error:', error)
    })
});
