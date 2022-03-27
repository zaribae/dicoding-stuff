const fs = require('fs');

//FileSystem

const path = require('path');

// const fileReadCallback = (error, data) => {
//   if(error) {
//     console.log('Gagal membaca berkas');
//     return;
//   }
//   console.log(data);
// };

// fs.readFile(path.resolve(__dirname, 'note.txt'), 'UTF-8', fileReadCallback);



//Readable Stream
 
const readableStream = fs.createReadStream(path.resolve(__dirname, 'article.txt'), {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});