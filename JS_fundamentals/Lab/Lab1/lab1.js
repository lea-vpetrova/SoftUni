function echoType(param) {
    console.log(typeof param);
    let dataType = typeof param;
    if (dataType === 'string' || dataType === 'number') {
        console.log(param);
    }
    else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null);