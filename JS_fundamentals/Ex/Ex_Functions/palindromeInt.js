function palindromInt(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].toString();
        let revNum = num.split('').reverse().join('');
        let result = Number(num)==Number(revNum)?"true":"false";
        console.log(result);
    }
}
palindromInt([123,323,421,121]);
