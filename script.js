// Esta función se activa cuando hacemos clic en una imagen
function mostrarTexto(imagen) {
    // Busca el siguiente elemento después de la imagen (en este caso, el <div> que tiene el texto)
    const texto = imagen.nextElementSibling;
    // Activa o desactiva la clase "mostrar" para que el texto se vea o se oculte
    texto.classList.toggle("mostrar");
}
