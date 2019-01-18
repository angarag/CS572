var fs = require('fs');


process.on('message', (msg) => {
    var fileUrl = null;
    var rs = null;
    console.log('Message from parent:', msg);
    // if (msg.chunk) {
    //     if (msg.chunk === 'First chunk message')
    //         msg.chunk = `FINAL MESSAGE`;
    // }
    // else {
        if (msg.path) {
            fileUrl = new URL(`file:${msg.path}`);
            rs = fs.createReadStream(fileUrl);//readableStream returned   
            if (msg.chunk == 'FINAL MESSAGE')
                msg.end = true;
            var dataLength=0;
            rs
                .on('data', function (chunk) {
                    dataLength += chunk.length;
                    msg.chunk=chunk;
                    // console.log(chunk);
                    process.emit('sendDataToParent',msg);
                }) 
                .on('end', function () {  // done
                    console.log('The length was:', dataLength);
                    msg.end=true;
                    process.emit('sendDataToParent',msg);
                }); 
            }
    process.on('sendDataToParent',(msg)=>{
        console.log('Child: sending data to Parent:',msg);
        process.send(msg);
    });
});