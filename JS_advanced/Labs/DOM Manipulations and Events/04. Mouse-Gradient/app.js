function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener("mouseout", gradientOut);

    function gradientMove(event) {
        let boxWidth = event.target.clientWidth;
        let mousePosition = event.offsetX / (boxWidth - 1);
        let perc = Math.trunc(mousePosition*100);
        document.getElementById("result").textContent = `${perc}%`;
    }

    function gradientOut() {
        document.getElementById("result").textContent = "";
    }
}