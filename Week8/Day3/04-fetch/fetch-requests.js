/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch('/products')
    .then(res => console.log({
        status: res.status,
        success: res.ok,
        headers: res.headers.get('Content-Type')
    }))
//this is for #1-3 but can be separated in single lines

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here



/* =================== 3. Print the Content-Type Header =================== */

// Your code here



/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch('/products')
    .then(res => res.text())
    .then(text => console.log(text))
