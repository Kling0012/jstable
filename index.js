const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value);
    add();
});

function add() {
    let todotext = input.value
    if (todotext) {
        const li = document.createElement("li");
        li.innerText = todotext;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";
    }

}