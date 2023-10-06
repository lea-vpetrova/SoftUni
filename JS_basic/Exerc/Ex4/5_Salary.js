function salary(input) {
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);
    for (let i = 2; i <=tabCount; i++) {
        let openTab = input[i];
        switch (openTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
                def
        }
    }
    if (salary <=0) {
        console.log("You have lost your salary.");
    }
    else{
        console.log(salary.toFixed(0));
    }
}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])

;