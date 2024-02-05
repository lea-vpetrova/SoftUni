function toggle() {
    let lable = document.getElementsByClassName("button")[0].innerHTML;
    if (lable === "More") {
        document.getElementsByClassName("button")[0].innerHTML = "Less";
        document.getElementById("extra").style.display = "block";
    } else {
        document.getElementsByClassName("button")[0].innerHTML = "More";
        document.getElementById("extra").style.display = "none";
    }
}