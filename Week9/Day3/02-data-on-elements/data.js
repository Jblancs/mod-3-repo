// Your code here
window.addEventListener("DOMContentLoaded", () => {

    const ul = document.getElementById("shopping-list")

    //add list item function


    const addLi = event => {
        const newLi = document.createElement("li")
        const input = document.getElementById("name")
        const groceryType = document.getElementById("type")

        const value = input.value

        newLi.innerText = value
        newLi.setAttribute("data-type", groceryType.value)

        ul.appendChild(newLi)

        event.preventDefault()//button default is submit which refreshes page
        console.log(newLi)
    }

    const addItem = document.getElementById("add")
    addItem.addEventListener("click", addLi)

})
