// script.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.sorteo button');
    const listaNombres = document.querySelectorAll('.lista li');

    button.addEventListener('click', function () {
        const nombreAleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)].textContent;

        Swal.fire({
            title: 'Nombre seleccionado',
            text: nombreAleatorio,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    });
});
