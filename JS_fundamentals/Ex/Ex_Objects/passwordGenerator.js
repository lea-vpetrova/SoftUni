function generate(input) {
    let [str1,str2, replacement] = input;
    let concatedStr = str1+str2;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let index = 0;

    for (let char of concatedStr) {
        if (vowels.includes(char)) {
            concatedStr = concatedStr.replace(char, replacement[index].toUpperCase());
            index++;

            if (index == replacement.length) {
                index = 0;
            }
        }
    }
    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is: ${password}`);
}
generate(['ilovepizza','ihatevegetables','orange']);