function occurrence(str) {
    let dict = {};
    
    let input = (str.toLowerCase()).split(' ');
    for (let word of input) {
        if (word in dict) {
            dict[word]++;
        }else{
            dict[word] = 1;
        }
    }
    console.log(dict);
    let entries = Object.entries(dict).sort((a,b)=>b[1]-a[1]);
    let output = [];
    for (let [word, rep] of entries) {
        if (rep % 2 !== 0) {
            output.push(word);
        }
    }
    console.log(output.join(' '));
}
occurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
occurrence('Cake IS SWEET is Soft CAKE sweet Food');