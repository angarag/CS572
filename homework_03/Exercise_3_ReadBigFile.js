//ReadFileSync
//readFile
//streams
var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    let fileUrl = new URL('file:/mnt/71DE9F217F45988A/9780134177373-Vol-1.pdf');
    //fileUrl=new URL('file:https://share.mobinet.mn/file/download/20gjpifppmcy/');
    var rs = fs.createReadStream(fileUrl).pipe(res);
}).listen(8080, ()=>{
    console.log('Listening on 8080');
});