(() => {
  const answer = `
    * when there are lots of callback functions in Timer queue or
    * when we want something to run right after any network request, I/O, Timer or idle operation. 
    * setImmediate will run right immediate after setTimeout with 0 second delay. 
    `;
  console.log(answer);
  const answer2 = `
    process.nextTick will always run before setImmediate as it has the highest priority in the queues.
    setImmediate belongs to Check queue. So when the priority comes to that queue, it will run in its corresponding cap.
    `;
  console.log(answer2);
  const answer3 = `
    Here is a list of core Node modules:
    * fs
    * http
    * path
    * url
    * util
    * queryString
    * dns
    * zlib
    * stream
    * readline`;
  console.log(answer3);

  /*
(() => new Promise((resolve) => resolve('promise')))().then((p) => console.log(p))
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));
*/

  /*
  function asyncCall(value, cb) {
      if (value !== 'CS572') {
        // return cb(value);
        return process.nextTick(cb, value);
      }
    }
    
    function log(msg) {
      console.log(msg);
    }
    
    asyncCall('World', log)
    console.log('Hello!');
  */
})()
