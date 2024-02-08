function addItem() {
    let text = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    let liText = document.createTextNode(text);
    li.appendChild(liText);
    
    let delBtn =  document.createElement("a");
    delBtn.textContent = "[Delete]";
    delBtn.href = "#";
    delBtn.addEventListener("click", DeleteField);
    
    li.appendChild(delBtn);

    document.getElementById("items").appendChild(li);
    document.getElementById("newItemText").value = "";

    function DeleteField(event) {
        let delBtn = event.target;
        let li = delBtn.parentElement;
        li.remove();
    }
}