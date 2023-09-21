import checkButton from "./components/checkTask.js";
import deleteButtom from "./components/deleteTask.js";

(() => {
    const btn = document.querySelector("[data-from-btn]");

    // console.log(btn);

    const createTask = (e) => {
        // console.log("Este es el evento", e);

        e.preventDefault();

        // console.log("Creando un nueva Tarea");

        const input = document.querySelector("[data-form-input]");

        // console.log(input.value);


        // const task = document.querySelector("[data-form-task]");

        const value = input.value;
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";


        // const content = `
        // <div>
        //     <i class="far fa-check-square icon"></i>
        //     <span class="task">${value}</span>
        // </div>
        // <i class="fas fa-trash-alt trashIcon icon"></i>`

        const taskContent = document.createElement("div");

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkButton());
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);
        task.appendChild(deleteButtom());
        list.appendChild(task);

        // console.log(content);
    }
    btn.addEventListener("click", createTask);
})
    ();