"use strict";
let username = "Tushar";
console.log(username);
// let a = 12;
// let b = '6';
// let c = 2;
// console.log(a / b);
// console.log(c * b);
/*
    Above code is wrong according to ts but it still complies to js, to stop this behaviour we changed uncommented ->  "noEmitOnError": true in tsconfig.json
    To ovveride this value in tsconfig using terminal we can use command tsc --noEmitOnError -w, but closing stopping ts and starting again it will again use defailt value of "noEmitOnError" in tsconfig.json
    the right way to implement is shown below :
*/
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(c * b);
