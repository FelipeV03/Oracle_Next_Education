
// URL de la API
const API = 'http://localhost:3000/perfil';

const listarClientes = async (table, cardinfo) => {
    try {
        const res = await fetch(API);
        if (res.status === 400) {
            throw new Error("Error al obtener los datos" + res.status);
        } else {
            const data = await res.json();
            console.log(data);
            data.forEach(({ nombre, email, id }) => {
                // console.log(id);
                table.innerHTML += cardinfo(nombre, email, id);
            });
        }
    } catch (error) {
        console.log("Tuvimos un error: ", error);
        window.location.href = "../screens/error.html"
    }


    const btnsDelete = document.querySelectorAll('[data-delete]');
    btnsDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', () => {
            const nameCliente = btnDelete.name
            const id = btnDelete.id;
            eliminarCliente(id, nameCliente);
        });
    })
    // console.log(table);
}


const crearCliente = async (nombre, email) => {
    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: uuid.v4(), nombre, email })
            // body: JSON.stringify({nombre, email})
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Tuvimos un error: ", error);
        window.location.href = "../screens/error.html"
    }
}


const eliminarCliente = async (id, nameCliente) => {
    // console.log("Eliminando...", id);

    try {
        const res = await fetch(`${API}/${id}`, {
            method: 'DELETE',
        });
        // console.log("Log de res: ", res);
        console.log("Eliminando cliente...", id);
        alert(`El cliente ${nameCliente} ha sido eliminado con exito`);
    } catch (error) {
        console.log("Tuvimos un error: ", error);
        window.location.href = "../screens/error.html"
    }
}


const detalleCliente = async (id) => {
    try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Tuvimos un error: ", error);
        window.location.href = "../screens/error.html"
    }
}


const actualizarCliente = async (id, nombre, email) => {
    try {
        const res = await fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ nombre, email })
        })
        // console.log("Esta es la respuesta de res: ", res);
        const data = await res.json();
        console.log("Esta es la respuesta de data: ", data);
        return data;
    } catch (error) {
        console.log("Tuvimos un error: ", error);
        window.location.href = "../screens/error.html"
    }

}


export const clientService = {
    listarClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
}



// const listarClientes = (table, cardInfo) => {
//     // Petición GET para obtener los datos de la API y mostrarlos en la tabla de clientes
//     const API = 'http://localhost:3000/perfil';
//     fetch(API)
//         .then(res => {
//             if (res.status === 400) {
//                 throw new Error("Error al obtener los datos" + res.status);
//             } else {
//                 return res.json();
//             }
//         })
//         .then(data => {
//             console.log(data);
//             data.forEach((user) => {
//                 table.innerHTML += cardInfo(user.nombre, user.email);
//             });
//         })
//         .catch(error => {
//             console.log("Tuvimos un error: ", error);
//         });
// }


// export const clientService = {
//     listarClientes,
// }