function Movie(input) {
    let movieBudget = Number(input[0]);
    let statics = Number(input[1]);
    let staticClothes = Number(input[2]);
    let clothes = staticClothes * statics;
    let decor = movieBudget*0.1;
    //let discount =0;
    if(statics > 150) clothes -= clothes*0.1;
    let spending = clothes + decor;
    if(spending > movieBudget) 
    {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(spending - movieBudget).toFixed(2)} leva more.`);

    }
    else 
    {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - spending).toFixed(2)
} leva left.`);
    }
}
Movie(["20000",
    "120",
    "55.5"]);
