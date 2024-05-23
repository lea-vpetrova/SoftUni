function solve() {
    const inputFieldEl = document.getElementById("input");
    const selectTo = document.getElementById("selectMenuTo");

    const options = [
        {value: 'binary', text: 'Binary'},
        {value: 'hexadecimal', text: 'Hexadesimal'}
    ];

    options.forEach(
        el => {
            const opt = document.createElement('option');
            opt.value = el.value;
            opt.textContent = el.text;
            selectTo.appendChild(opt);
        }
    );
    const resultFieldEl = document.getElementById("result");
    const convertBtn = document.querySelector("button");

    convertBtn.addEventListener('click', onClick);

    function onClick(){
        let number = Number(inputFieldEl.value);
        const convertTo = selectTo.value;

        if (convertTo === 'binary') {
            resultFieldEl.value = number.toString(2);
        }
        else if (convertTo === 'hexadecimal') {
            resultFieldEl.value = number.toString(16).toUpperCase();
        }
    }
}