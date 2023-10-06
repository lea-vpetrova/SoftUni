function rightPlace(str, char, result) {
    let res = str.replace('_',char);
    /*if(res===result){console.log("Matched");}
    else{console.log("Not Matched");}*/
    let output = res===result? "Matched":"Not Matched";
    console.log(output);
}
rightPlace("str_ng","i","string");