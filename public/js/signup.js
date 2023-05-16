const form = document.querySelector(".form");


console.log("goofoof");

form.addEventListener("submit", async e => {
    e.preventDefault();

    // store form data
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    console.log(username, email, password);

    // post request
    try {
    const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(result => {console.log(response.json())});
    } catch (err) {
        console.log(err);
    }
    
    
})