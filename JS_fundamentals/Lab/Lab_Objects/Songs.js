function playList(input) {
    class Song{
        constructor(typeList, name, time)
        {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let type = input.pop();
    for (let i = 0; i < numberOfSongs; i++) {
        
        let [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList,name,time));
        
    }
    if (type === 'all') {
        songs.forEach((i) => console.log(i.name));
    }
    else{
        let filtered = songs.filter((i)=> i.typeList === type);
        filtered.forEach((i)=> console.log(i.name));
    }
}
playList([4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater']);