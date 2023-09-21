import { clientService } from "../services/client-service.js";

const form = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = (url.searchParams.get("id"));

const obtenerInformacion = async () => {
    if (id === null) {
        window.location.href = "../screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    const cliente = await clientService.detalleCliente(id);
    // console.log(cliente);
    nombre.value = cliente.nombre;
    email.value = cliente.email;
}

obtenerInformacion();


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre);
    console.log(email);

    const data = await clientService.actualizarCliente(id, nombre, email);
    // console.log("Esta es la data desde el controller: ", data);
    if (data) {
        window,location.href = "../screens/edicion_concluida.html"
    }
});