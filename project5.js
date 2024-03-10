document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const addTaskBtn = document.getElementById("buttonn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = input.value.trim();
        if(input.value===''){
            alert('you must add something ')
        }

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "deleteBtn";

            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("deleteBtn")) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    });
});
