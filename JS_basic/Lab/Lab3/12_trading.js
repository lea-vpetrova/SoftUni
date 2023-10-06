function Trading(input) {
    let city = input[0];
    let range = Number(input[1]);
    let commition = 0;
    if (city === "Sofia") {
            if (range >= 0 && range <= 500)
                commition = range * 0.05;
            else if (range >= 501 && range <= 1000)
                commition = range * 0.07;
            else if (range >= 1001 && range <= 10000)
                commition = range * 0.08;
            else if (range > 10000)
                commition = range * 0.12;
            else if (range < 0)
                console.log("error");
        }
    else if (city === "Varna") {
        if (range >= 0 && range <= 500)
            commition = range * 0.045;
        else if (range >= 501 && range <= 1000)
            commition = range * 0.075;
        else if (range >= 1001 && range <= 10000)
            commition = range * 0.1;
        else if (range > 10000)
            commition = range * 0.13;
        else if (range < 0)
            console.log("error");
    }
    else if (city === "Plovdiv") {
        if (range >= 0 && range <= 500)
            commition = range * 0.055;
        else if (range >= 501 && range <= 1000)
            commition = range * 0.08;
        else if (range >= 1001 && range <= 10000)
            commition = range * 0.12;
        else if (range > 10000)
            commition = range * 0.145;
        else if (range < 0)
            console.log("error");
    }
    else { console.log("error"); }

    if (commition > 0) {
        console.log(commition.toFixed(2));
    }
    else {
        return;
    }

}
Trading(["Sofia",
    "1500"]);