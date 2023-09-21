const deleteButtom = (e) => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (e) => {
    // console.log("Eliminando tarea");
    // console.log(e.target.offsetParent);
    const icon = e.target.offsetParent;
    icon.remove();
}

export default deleteButtom;