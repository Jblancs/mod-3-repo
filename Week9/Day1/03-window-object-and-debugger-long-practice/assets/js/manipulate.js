export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = "jordan's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    let newHeader = document.body.children[0].children[0]
    newHeader.innerText = "Jordan"

}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    let newPara = document.body.children[0].children[1]
    newPara.innerText = "computer guy"

}
