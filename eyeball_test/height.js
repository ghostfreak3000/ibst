var ibst = require("../ibst");
var clean = require("../lib/cleanStringify");
var grades = new ibst([
                        {min:75,max:79.9,value:"B+"},
                        {min:80,max:100,value:"A"},
                    ]);
var string = clean.stringify(grades);

var regex = /"__height__":(\d+)/gi; 
var match = regex.exec(string);

console.log("\n###")
console.log(string)
console.log("###\n")

var heights = [];

while (match != null) {
  // matched text: match[0]
  // match start: match.index
  // capturing group n: match[n]
  console.log(match[0])
  console.log(match[1])
  heights.push(match[1]);
  match = regex.exec(string);
}
var largest = Math.max.apply(null,heights);

console.log("\n###")
console.log(largest)
console.log("###\n")
