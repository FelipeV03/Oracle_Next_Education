const checkButton = (e) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (e) => {
    console.log("Completando tarea");
    // console.log(e.target);
    const icon = e.target;
    icon.classList.toggle("fas");
    icon.classList.toggle("completeIcon")
    icon.classList.toggle("far");
}

export default checkButton;