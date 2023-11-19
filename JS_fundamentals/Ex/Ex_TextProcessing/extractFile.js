function extractFile(path) {
    let fileInfo = path.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let filename = fileInfo.slice(0, lastDotIdx);
    let extension = fileInfo.slice(lastDotIdx+1);
    console.log(`File name: ${filename}\nFile extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');