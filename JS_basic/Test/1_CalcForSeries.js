function calc(input) {
    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2])-1;
    let episodeTime = Number(input[3]);
     
    let ad = episodeTime * 0.2;
    let episodeTotalTime = episodeTime + ad;
    let lastEpisode = episodeTotalTime +10;
    let len = seasons*episodes*episodeTotalTime + seasons*lastEpisode;

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(len)} minutes.`);
}
calc(["Lucifer","3","18","55"]);