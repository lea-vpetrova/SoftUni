function piccolo(arr) {
    let parkingLot = new Set();
    for (let record of arr) {
        let [direction, carNum] = record.split(', ');

        if (direction === "IN") {
            parkingLot.add(carNum);
        }
        else if (direction === "OUT") {
            parkingLot.delete(carNum);
        }
    }
    if (parkingLot.size === 0) console.log("Parking Lot is Empty");
    else {
        let sortedCarNum = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        sortedCarNum.forEach(element => console.log(element));
    }
}
/*piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']);*/
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);