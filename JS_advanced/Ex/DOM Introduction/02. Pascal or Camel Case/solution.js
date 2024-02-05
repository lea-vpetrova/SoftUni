function solve() {
  let input = document.getElementById("text").value;
  let currCase = document.getElementById("naming-convention").value;
  let result = '';
  input = input.toLowerCase();
  switch (currCase) {
    case "Camel Case":
      text = input.split(' ');
      result = text.shift();
      text.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      text = input.split(' ');
      text.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    default:
      result += "Error!";
      break;
  }
  document.getElementById("result").textContent = result;
}