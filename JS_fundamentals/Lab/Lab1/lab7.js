function reading(pagesTotal,pagesPerH,days) {
    let time = pagesTotal/pagesPerH;
    let reqH = time/days;
    console.log(reqH);
}
reading(432,15,4);