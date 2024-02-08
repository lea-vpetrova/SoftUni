function validate() {
    let inputElem = document.getElementById("email");
    inputElem.addEventListener('change', checkEmail);

    function checkEmail(event) {
        let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
        if (regex.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
        
    }
}