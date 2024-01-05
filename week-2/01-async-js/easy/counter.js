let count=0;
// const prompt = require('prompt');

setTimeout(function run(){
    c();
    setTimeout(run,1000)
},0)
function c(){
    count++;
    console.log(count);
}