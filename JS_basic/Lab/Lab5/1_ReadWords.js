function fread(input) {
    let index =0;
    while (true) {
        let str =input[index];
        index++;
        if(str === "Stop"){break;}
        console.log(str);
    }
}
fread(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);