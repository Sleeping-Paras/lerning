const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// please follow this only 

const gameName = new String('hitesh-hc-com') // provide some extra properties of strings

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // what is char at 2
console.log(gameName.indexOf('t'));// where is it 

const newString = gameName.substring(0, 4) // makes substr 
console.log(newString);

const anotherString = gameName.slice(-8, 4)// if -ve stars from end 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes spaces 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // will replace the %20 to -

console.log(url.includes('sundar'))// caheckas is it present or not 

console.log(gameName.split('-'));// splits on the bases of -