const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruit = document.querySelectorAll("li.seed")
    // const seededFruit = document.getElementByClassName("seed")
    console.log(seededFruit)


    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruit = document.querySelectorAll("li.seedless")
    // const seedlessFruit = document.getElementByClassName("seedless")
    console.log(seedlessFruit)


    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.querySelectorAll("li.seedless")[0]
    // const firstSeedless = document.getElementByClassName("seedless")[0]
    console.log(firstSeedless)


    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const innerSpan = document.querySelector("#wrapper span")
    console.log(innerSpan)

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.querySelector("#wrapper")
    console.log(wrapper.children)


    // 6. Get all odd number list items in the list
    // Your code here
    const listItems = Array.from(document.querySelectorAll("li"))
    const oddList = listItems.filter(li => listItems.indexOf(li) % 2 !== 0)
    // const oddList = document.getElementByClassName("ol.odd")
    console.log(oddList)

    // 7. Get all even number list items in the list
    // Your code here
    const evens = document.querySelectorAll("ol > li:not(.odd)")
    console.log(evens)


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const companies = Array.from(document.querySelectorAll('a'))
    const classlessCompanies = companies.filter(company => !company.getAttribute("class"))
    console.log(classlessCompanies)

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = companies.filter(company => company.innerText === "Amazon")
    console.log(amazon)


    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll("#three > ul > li")
    console.log(unicorns)
}

window.onload = select;
