

const rxjs = require('rxjs');
const { of, from, Observable } = rxjs;
const { map, filter, mergeMap } = require('rxjs/operators');//rxjs.operators;
const http = require('http');
const { fork } = require('child_process');
const url = require('url');
const server = http.createServer();
const os = require('os');
const cluster = require('cluster');
const path = require('path');
var fs = require('fs');

const message = {
    path: null,
    chunk: null,
    end: false
}
server.on('request', function (req, res) {
    const url_obj = url.parse(req.url, true);
    if (url_obj.path === '/favicon.ico')
        res.end();
    else {
        const path = url_obj.query.url;
        console.log(url_obj.query)
        const childProcess = fork('./download_file.js');
        message.path = path;
        console.log('message at the beginning:', message);
        childProcess.send(message);
        childProcess.on('message', (msg) => {
            if (!msg.end) {
                res.emit('chunk', msg.chunk);
            }
            else {
                this.emit('done');
            }
        });
        this.on('done', () => {
            childProcess.kill();
            res.end('DONE');
        });
        res.on('chunk', (data) => {
            console.log('Parent: Emitting chunk data to response', data)
            res.write(Buffer.from(data));
        });
    }
});
server.listen(4000, () => {
    console.log('Server is Listening on 4000');
});
/*if to kill the process, run this:
fuser -k 4000/tcp
*/


