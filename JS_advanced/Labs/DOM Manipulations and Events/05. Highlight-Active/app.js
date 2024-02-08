function focused() {
    let divInputList = Array.from(document.querySelectorAll("div input"));
    divInputList.forEach(div => div.addEventListener("focus", focus));
    divInputList.forEach(div => div.addEventListener("blur", focusLost));

    function focus(event) {
        let parent = event.target.parentElement;
        parent.classList.add("focused")
    }
    function focusLost(event) {
        let parent = event.target.parentElement;
        parent.classList.remove("focused")
    }
}