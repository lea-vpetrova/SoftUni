function histogram(input) {
    let n = Number(input[0]);
    let p1=0, p2=0, p3=0, p4=0 , p5 =0;
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;
    for (let i = 1; i <= n; i++) {
        let value = Number(input[i]);
        
        if (value <200) {
            c1++;
            p1 = c1/n*100;
        }
        else if (value>=200 && value<=399)
        {
            c2++;
            p2 = c2 / n * 100;
        }
        else if (value>=400 && value<=599)
        {
            c3++;
            p3 = c3 / n * 100;
        }
        else if (value >= 400 && value <=799)
        {
            c4++;
            p4 = c4 / n * 100;
        }
        else if(value >=800)
        {
            c5++;
            p5 = c5 / n * 100;
        }

    }
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])
;