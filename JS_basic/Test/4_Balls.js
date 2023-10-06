function balls(input) {
    let N = Number(input[0]);
    let color='';
    let points =0;
    let cR=0,cO =0, cY=0,cW=0,cB=0,cDiff=0;
    for (let i = 1; i <= N; i++) {
        color = input[i];
        switch (color) {
            case "red":
                points+=5;
                cR++;
                break;
            case "orange":
                points+=10;
                cO++;
                break;
            case "yellow":
                points+=15;
                cY++;
                break;
            case "white":
                points+=20;
                cW++;
                break;
            case "black":
                cB++;
                points/=2;
                break;
            default:
                points+=0;
                cDiff++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${cR}`);
    console.log(`Orange balls: ${cO}`);
    console.log(`Yellow balls: ${cY}`);
    console.log(`White balls: ${cW}`);
    console.log(`Other colors picked: ${cDiff}`);
    console.log(`Divides from black balls: ${cB}`);
}
balls(["3","white","black","pink"]);