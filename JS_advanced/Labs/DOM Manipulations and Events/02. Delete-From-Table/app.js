function deleteByEmail() {
    let table = Array.from(document.querySelectorAll("tbody tr"));
    let inputField = document.querySelector('[name="email"]');
    let resultField = document.getElementById("result");
    let success = false;
    for (let row of table) {
        let emailField = row.children[1].textContent;
        if (emailField == inputField.value) {
            row.remove();
            success = true;
        }
    }
    if (success) {
        resultField.textContent = "Deleted.";
    }else{
        resultField.textContent = "Not found.";
    }
    document.querySelector('[name="email"]').value ="";
}