import { clientService } from "../services/client-service.js";

const cardInfo = (nombre, email, id) => {
    // console.log(id);
    const card = `
    <tr>
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit"> Editar </a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id="${id}" name="${nombre}" data-delete> Eliminar </button>
            </li>
        </ul>
    </td>
    </tr>
    `;
    return card;
}

const table = document.querySelector('[data-table]');

clientService.listarClientes(table, cardInfo);