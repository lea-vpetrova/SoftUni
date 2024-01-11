function easterEggs(input) {
    let pattern = /[@|#](?<color>[a-z]+)[@|#]\D+\/(?<amount>\d+)\//gm;
    let match = pattern.exec(input);
    while (match) {
        let color = match.groups['color']
        let amount = match.groups['amount'];
       
        match = pattern.exec(input);
        console.log(`You found ${amount} ${color} eggs!`);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@* $ %^&* /5/']);

