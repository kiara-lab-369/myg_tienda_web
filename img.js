// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".slider img");
    let indice = 0;

    // Ocultamos todas las imágenes excepto la primera al inicio
    imagenes.forEach((img, i) => {
        if (i !== indice) {
            img.style.display = 'none';  // Ocultamos las imágenes no activas
        }
    });

    // Cambiamos la imagen activa cada 3 segundos
    setInterval(() => {
        // Ocultamos la imagen anterior
        imagenes[indice].style.display = 'none';

        // Actualizamos el índice para la próxima imagen
        indice = (indice + 1) % imagenes.length;

        // Mostramos la nueva imagen activa
        imagenes[indice].style.display = 'block';
    }, 3000);
});