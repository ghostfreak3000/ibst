/*
    This file is used to eyeball test the regex for the cleanStringify function
*/
var ibst = require("../ibst");

// Whenever you change this tree, update it in the /mocha_test/cleanStringify.js file
var grades = new ibst([
                        {min:75,max:79.9,value:"B+"},
                        {min:80,max:100,value:"A"},
                        {min:70,max:74.9,value:7},
                        {min:65,max:69.9,value:44.547},
                        {min:60,max:64.9,value:{a:"a",b:"b"}},
                        {min:55,max:59.9,value:{a:7,b:44.547}},
                        {min:50,max:54.9,value:{student:{name:"John Doe",age:25}}},
                        {min:45,max:49.9,value:"value"},
                        {min:40,max:44.9,value:{a:"value",b:"value"}},
                        {min:35,max:39.9,value:{value:"value",value:"value"}},
                        {min:30,max:34.9,value:{value:{value:"value",value:"value"}}},
                        {min:25,max:29.9,value:["value","value"]},
                        {min:20,max:24.9,value:[{value:{value:"value",value:"value"}},{value:{value:"value",value:"value"}}]},
                        {min:15,max:19.9,value:[[],[]]}
                    ]);
var string = JSON.stringify(grades);
// Whenever you change this regex, update it in the ./lib/cleanStringify.js file
var regex = /("value":("\s*?\S*?",|\d*?.\d*?,|{.*?},|\[.*?\],))/gi; 
var match = regex.exec(string);

console.log("\n###")
console.log(string)
console.log("###\n")

while (match != null) {
  // matched text: match[0]
  // match start: match.index
  // capturing group n: match[n]
  console.log(match[0])
  match = regex.exec(string);
}

string = string.replace(regex,"");
console.log("\n###")
console.log(string)
console.log("###\n")

// Always ensure the length 0.
console.log("\n###")
console.log((string.match(/value/g) || []).length)
console.log("###\n")