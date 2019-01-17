//ReadFileSync
//readFile
//streams
var http = require('http');
var fs = require('fs');
var path = require('path');
let fileUrl = new URL('file:/mnt/71DE9F217F45988A/9780134177373-Vol-1.pdf');
fileUrl=new URL('file:/mnt/01D21A6FCDDEABE0/humanBody.iso');
var server1 = http.createServer();
var server2 = http.createServer();
var server3 = http.createServer();

server3.on('request',function(req,res){
    console.log('Stream solution');
    //fileUrl=new URL('file:https://share.mobinet.mn/file/download/20gjpifppmcy/');
    var time_spent=null;
    var start = new Date();
    var rs0 = fs.createReadStream(fileUrl);//readableStream returned
    rs0.pipe(res);
    rs0.on('end',()=>{
        time_spent = new Date() - start;
        let response = `Stream - Time spent = ${time_spent} ms`;
        console.log(response);
        //res.end(response);   this line won't work!
    });
});

server2.on('request',function(req,res){
    console.log('readFile solution');
    var start = new Date();
    var time_spent=null;
    fs.readFile(fileUrl,(err,data)=>{
        console.log(data);
        this.emit('done',data);
    });
    this.on('done',(data)=>{
//        var rs = fs.createReadStream(data);
        time_spent=new Date()-start;
        let response = `readFile - Time spent = ${time_spent} ms`;
        //rs.pipe(res);
        res.end(response+'\n',()=>{
            time_spent=new Date()-time_spent;
            response = `browserLoad - Time spent = ${time_spent} ms`;
            console.log(response);    
        });
    })
});

server1.on('request',function(req,res){
    console.log('readFileSync solution');
    var time_spent=null;
    var start = new Date();
    const result = fs.readFileSync(fileUrl);
        time_spent = new Date() - start;
        let response = `readFileSync - Time spent = ${time_spent} ms`;
        res.end(response);
});


server3.listen(5000, ()=>{
    console.log('Streams is Listening on 5000');
});
server2.listen(4000,()=>{
    console.log('ReadFile is Listening on 4000');
});

server1.listen(3000,()=>{
    console.log('ReadFileSync is Listening on 3000');
});

console.log('Please look at the PNG file for the conclusion');



