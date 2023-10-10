// Agrega este código JavaScript en tu archivo
function filtrarMaletas() {
    var categoriaSeleccionada = document.getElementById("categoria").value;
    var maletas = document.querySelectorAll(".maleta");

    maletas.forEach(function(maleta) {
        maleta.style.display = "none"; // Oculta todas las maletas

        if (categoriaSeleccionada === "todos") {
            maleta.style.display = "block"; // Muestra todas las maletas si "Todos" está seleccionado
        } else if (maleta.classList.contains(categoriaSeleccionada)) {
            maleta.style.display = "block"; // Muestra maletas de la categoría seleccionada
        }
    });
}
