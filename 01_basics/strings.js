const name="Aanchal"
const repoCount=50
// console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("hitesh-hc-com");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('C'));
// console.log(gameName.lastIndexOf('c'));

const newString=gameName.substring(2,4);
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const newStringOne="    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trimEnd());

const url="https://hitesh.com/hites%20aanchal"


console.log(url.replace('%20','-'));
console.log(url.includes('aaanchal'))

console.log(gameName.split('-'));








