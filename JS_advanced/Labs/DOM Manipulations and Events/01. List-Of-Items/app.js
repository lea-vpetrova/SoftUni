function addItem() {
    let text = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    let list = document.createTextNode(text);
    li.appendChild(list);
    document.getElementById("items").appendChild(li);

    document.getElementById("newItemText").value = "";
}