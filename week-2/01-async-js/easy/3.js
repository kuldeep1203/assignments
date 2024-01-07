
const fs = require("fs");
fs.readFileSync("C:\\Users\\kulu1\\assignments\\week-2\\01-async-js\\easy\\test.txt", "utf-8", function (err, data) {
  console.log(data);
});
fs.writeFile("C:\\Users\\kulu1\\assignments\\week-2\\01-async-js\\easy\\test.txt","supp",(err)=>{
    if (err)
    console.log(err);
  
   
});
//supposedly the file reading call is expensive hence it is asynce so log hi will take place and then read file data

console.log("hi");
let a = 0;
fs.writeFile("C:\\Users\\kulu1\\assignments\\week-2\\01-async-js\\easy\\test.txt","sup",(err)=>{
    if (err)
    console.log(err);
  
    console.log(fs.readFileSync("C:\\Users\\kulu1\\assignments\\week-2\\01-async-js\\easy\\test.txt", "utf8"));
});
for (let i = 0; i < 1000000000; i++) {
  a++;
}
console.log("hithere");
