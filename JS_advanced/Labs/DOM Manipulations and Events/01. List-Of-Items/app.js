function addItem() {
    let text = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    let liText = document.createTextNode(text);
    li.appendChild(liText);
    document.getElementById("items").appendChild(li);

    document.getElementById("newItemText").value = "";
}