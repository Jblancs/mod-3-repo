// Your code here
window.addEventListener("DOMContentLoaded", () => {
    // alert("DOM has loaded")

    //part 1 change bg color:
    const redInput = document.getElementById("red-input")

    const changeRed = event => {
        if (event.target.value === "red") {
            event.target.style.backgroundColor = "red"
        } else {
            event.target.style.backgroundColor = "transparent"
        }

    }
    redInput.addEventListener("input", changeRed)

    //part 2 add li:
    const addItem = document.getElementById("add-item")
    const ul = document.querySelector("ul")

    const addLi = event => {
        const input = document.getElementById("list-add");
        const value = input.value;
        const newLi = document.createElement("li");
        newLi.innerText = value;
        ul.appendChild(newLi);
        input.value = "";
    }

    addItem.addEventListener("click", addLi);

    //part 3 change bg color:
    const color = document.getElementById("color-select")
    const section = document.getElementById("section-3")

    const changeColor = event => {
        section.style.backgroundColor = event.target.value
    }

    color.addEventListener("change", changeColor)

    //part 4 remove listeners:
    const removeListeners = document.getElementById("remove-listeners")

    removeListeners.addEventListener("click", event => {
        redInput.removeEventListener("input", changeRed)
    })

})
