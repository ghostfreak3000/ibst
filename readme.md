# ibst

Interval binary search tree

``` js
var ibst = require("ibst");

var grades = new ibst([
                        {min:80,max:100,value:"A"},
                        {min:75,max:79.9,value:"B+"},                       
                        {min:70,max:74.9,value:"B"}]);  

console.log(grades.search(73));
console.log(grades.search(78.2));
console.log(grades.search(90));

/*
    >> Output
    { status: true, node: { min: 70, max: 74.9, value: 'B' } }
    { status: true, node: { min: 75, max: 79.9, value: 'B+' } }
    { status: true, node: { min: 80, max: 100, value: 'A' } }
*/

```

## Installation

``` bash
$ npm install ibst --save
```

# API


## Assumptions & Notes
- There are no overlapping intervals e.g [ 1 - 3, 2 - 5 ]
- Do not insert the string `__count__` anywhere in your values otherwise it will affect the count function.

# License

The MIT License (MIT)

Copyright (c) 2017 Bishaka Samuel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.