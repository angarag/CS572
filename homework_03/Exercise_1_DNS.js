//DNS resolution with regular resolve4 method
(()=>{
    const dns = require('dns');

    const hostname = 'www.mum.edu';
    console.log('1 Start');
    dns.resolve4(hostname,null,function(err,addrs){
     console.log('1 DNS resolved with regular resolve4 method: ',addrs[0]);
    });
    console.log('1 End');
})();

//DNS resolution with Promise
(()=>{
    const {resolve4} = require('dns');
    const {promisify} = require('util');
    const hostname = 'www.mum.edu';
    const new_resolve4 = promisify(resolve4);
    console.log('2 Start');
    new_resolve4(hostname)
        .then((data)=>{console.log('2 DNS resolved with Promise: ',data[0])})
        .catch((err)=>{console.log(err)});    
    console.log('2 End');
})();

//DNS resolution with Async/await
(()=>{
    const {resolve4} = require('dns');
    const {promisify} = require('util');
    const hostname = 'www.mum.edu';
    const new_resolve4 = promisify(resolve4);
    console.log('3 Start');
    async function main(){
        try{
            const result = await new_resolve4(hostname);
            console.log('3 DNS resolved with Async/await: ',result[0])
        }catch(err){
            console.log('error occured');
        }
    }
    main();
    console.log('3 End');
})();
