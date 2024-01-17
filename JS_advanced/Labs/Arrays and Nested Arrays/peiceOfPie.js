function pieceOfPie(arr, start, finish) {
    console.log(arr.slice(arr.indexOf(start), arr.indexOf(finish) + 1));
}
pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');