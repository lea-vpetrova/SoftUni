

const container = document.querySelector('.container');
const main = document.querySelector('main');

window.addEventListener('load', showHome);
document.querySelector('a').addEventListener('click', showHome);

document.querySelector('form').addEventListener('submit', getFormData);

function showHome(){
    container.replaceChildren(main);
}