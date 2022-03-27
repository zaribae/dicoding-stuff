//Readable Stream
const fs = require('fs');
const path = require('path');

// const readableStream = fs.createReadStream(path.resolve(__dirname, 'article.txt'), {
//     highWaterMark: 10
// });
 
// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });
 
// readableStream.on('end', () => {
//     console.log('Done');
// });


//Writeable Stream

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15,
});
  
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));
  
readableStream.on('readable', () => {
    try {
      writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
      // catch the error when the chunk cannot be read.
    }
});
  
readableStream.on('end', () => {
    writableStream.end();
});