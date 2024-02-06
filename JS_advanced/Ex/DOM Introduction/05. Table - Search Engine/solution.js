function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchingInput = document.getElementById("searchField");
   let tableRows = Array.from(document.querySelectorAll("tbody tr"))
   function onClick() {
      let text = searchingInput.value;
      for (let row of tableRows) {
         let tableCols = Array.from(row.querySelectorAll("td"));
         for (let col of tableCols) {
            if (col.textContent.includes(text)) {
               row.classList.add("select");
               break;
            }
            else{
               row.classList.remove("select")
            }
         }
      }
      searchingInput.value = "";
   }
}