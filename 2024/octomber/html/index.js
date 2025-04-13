// Create a website for users to sign in and manage information about Goa’s students. Users can select roles: Viewer or Moderator.

const form = document.getElementById("form");
const select = getElementById("selection");
const table = document.getElementById("table");

form.addEventListener("submit", () => {
    const name = form.name.value;
    const password = form.password.value;
    
    if (name === "" || password === "") {
        alert("incorrect, please enter in all fields");
        return;
    }
})

if (select.value === "moderator") {
    table.contentEditable = "true"
}

else {
    table.contentEditable = "false"
}