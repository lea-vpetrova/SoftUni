function invalid(input) {
    let num = Number(input[0]);
    if(num >=100 && num<=200 || num ===0)
    {
        return;
    }
    else { console.log("invalid");}
}
invalid(["20"]);