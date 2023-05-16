const form = document.querySelector(".form");

form.addEventListener("submit", async e => {
    e.preventDefault();

    // store input fields
    const email = form.children[1].value;
    const password = form.children[4].value;

    // post
    try {
        const res = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    } catch(err) {
        const result = await (res.json());
    }
    
})
