// Act Int 3 - JavaScript para el sitio temático de la Preparatoria 9

// 1) Modo oscuro: el botón cambia la clase del body
var botonModoOscuro = document.getElementById("boton-modo-oscuro");
if (botonModoOscuro) {
    botonModoOscuro.addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            botonModoOscuro.textContent = "Modo claro";
        } else {
            botonModoOscuro.textContent = "Modo oscuro";
        }
    });
}

// 2) Formulario de contacto: valida nombre y correo, y muestra un mensaje en la página
var formulario = document.getElementById("formulario-contacto");
if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nombre = document.getElementById("nombre").value.trim();
        var correo = document.getElementById("correo").value.trim();
        var mensajeFormulario = document.getElementById("mensaje-formulario");

        if (nombre === "" || correo === "") {
            mensajeFormulario.textContent = "Por favor escribe tu nombre y tu correo antes de enviar el mensaje.";
            return;
        }

        mensajeFormulario.textContent = "Gracias, " + nombre + ". Tu mensaje fue enviado. Te vamos a responder al correo " + correo + ".";
        formulario.reset();
    });
}

// 3) Cooperativa: el botón muestra u oculta el menú
var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu-cooperativa");
if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
        menu.classList.toggle("oculto");
        if (menu.classList.contains("oculto")) {
            botonMenu.textContent = "Ver menú";
        } else {
            botonMenu.textContent = "Ocultar menú";
        }
    });
}
