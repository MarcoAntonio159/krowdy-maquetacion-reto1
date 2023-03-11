document.getElementById("mostrarOcultar").addEventListener("click", function () {
    var miDiv = document.getElementById("detalleOferta");
    if (miDiv.style.display === "none") {
        miDiv.style.display = "block";
    } else {
        miDiv.style.display = "none";
    }
});