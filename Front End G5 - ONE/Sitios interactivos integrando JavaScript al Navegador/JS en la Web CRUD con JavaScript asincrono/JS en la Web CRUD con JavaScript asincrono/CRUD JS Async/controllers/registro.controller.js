import { clientService } from "../services/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(form.elements.nombre.value);
    console.log(form.elements.email.value);
    const data = await clientService.crearCliente(form.elements.nombre.value, form.elements.email.value);
    console.log(data); // Agregar este console.log para verificar la respuesta de la API

    // Si la creación del cliente fue exitosa, redirecciona a otra vista
    if(data) {
        window.location.href = "../screens/registro_completado.html"
    }
});