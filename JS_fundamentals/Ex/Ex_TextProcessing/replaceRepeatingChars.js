function replaceRepChar(str) {
    let noRepStr = '';
    let prevChar = '';
    for(let curChar of str){
        if(curChar !== prevChar)
        {
            noRepStr += curChar;
            prevChar = curChar;
        }
    }
    console.log(noRepStr);
}
replaceRepChar('aaaaabbbbbcdddeeeedssaa');