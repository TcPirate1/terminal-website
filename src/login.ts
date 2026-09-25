const form = document.getElementById('mock-login') as HTMLFormElement;
const nameInput = document.getElementById('error-name');
const pwInput = document.getElementById('error-pw');

form.reset();

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("username");
    const pw = formData.get("pw");

    if (name !== "" || name.trim().length !== 0) {
        console.log("username not empty");
    }
    else {
        nameInput!.textContent = "Username should not be empty";
    }
    if (pw !== "" || pw.trim().length !== 0) {
        console.log("Password not empty");
    }
    else {
        pwInput!.textContent = "Password should not be empty";
    }
})
