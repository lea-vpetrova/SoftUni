function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let text = document.querySelector("textarea");
   let bestRestaurantRef = document.querySelector("#bestRestaurant p");
   let bestRestaurantWOrkersRef = document.querySelector("#workers p");
   function onClick () {
      let data = JSON.parse(text.value);
      let result = {};

      for(let line in data)
      {
         let[name,workers] = line.split(" - ");
         if (!result.hasOwnProperty(name)) {
            result[name]={
               avgSal:0,
               bestSal:0,
               workers:[]
            };
         }
         let currWorkers = getArrOfWorkers(workers, result[name].workers);
         result[name].workers = sortWorkers(currWorkers);
         updateSal(result[name]);
      }
      let bestRestaurant = findBestR(result);
      appendRestInfo(bestRestaurant);
      appendWorkersInfo(bestRestaurant[1].workers)
   }
   function appendWorkersInfo(workers) {
      let buff ="";
      workers.forEach(worker => buff +=`Name: ${worker.name} With Salary: ${worker.sal}`);
      bestRestaurantWOrkersRef.textContent = buff;
   }
   function appendRestInfo(data) {
      bestRestaurantRef.textContent = `Name: ${data[0]} Average Salary: ${(data[1].avgSal).toFixed(2)} Best Salary: ${(data[1].bestSal).toFixed(2)}`
   }
   function findBestR(restaurants) {
      return Object.entries(restaurants).sort((a,b)=>{ return b[1].avgSal - a[1].avgSal})[0];
   }

   function sortWorkers(workers) {
      return workers.sort((wA,wB) => wB.sal - wA.sal);
   }

   function updateSal(restaurant) {
      let sumSal =0;
      let bestSal=0;
      restaurant.workers.forEach(worker => {
         sumSal += worker.sal;
         if (bestSal < worker.sal) {
            bestSal = worker.sal
         }
      });
      restaurant.bestSal = bestSal;
      restaurant.avgSal = sumSal/restaurant.workers.length;
   }
   function getArrOfWorkers(workersData,exsistWorker){
      let arrWorkers = workersData.split(', ');
      
      for (let worker of arrWorkers) {
         let [name,sal] = worker.split(", ");
         sal = Number(sal);
         exsistWorker.push({
            name,
            sal
         });
      }
      return exsistWorker;
   }
}