# ibst

Interval binary search tree

[![NPM Version](https://img.shields.io/npm/v/ibst.svg)](https://www.npmjs.com/package/ibst)
[![NPM Downloads](https://img.shields.io/npm/dt/ibst.svg)](https://www.npmjs.com/package/ibst)
[![Linux Build](https://img.shields.io/travis/ghostfreak3000/ibst/master.svg?label=linux)](https://travis-ci.org/ghostfreak3000/ibst)
[![Windows Build](https://img.shields.io/appveyor/ci/ghostfreak3000/ibst/master.svg?label=windows)](https://ci.appveyor.com/project/ghostfreak3000/ibst)

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

## ibst( [nodes] )
* `node` { Object | Array }

## Class: ibst

Create a new ibst tree by instantiating the ibst class

```js
    var ibst = require("ibst");
    var grades = new ibst();
```

You can create a tree with one node

```js
    var ibst = require("ibst");
    var grades = new ibst({min:75,max:79.9,value:"B+"});
```

or with multiple

```js
    var ibst = require("ibst");
    var grades = new ibst([
                            {min:75,max:79.9,value:"B+"},
                            {min:80,max:100,value:"A"},
                            {min:70,max:74.9,value:"B"}]); 
```

### Properties

* `node` The node / array of nodes passed in
    
    * `min` {integer} The minimum range of the node
    * `max` {integer} The maximum range of the node
    * `value` {Object} The value of the node

### Methods

* `insert( [nodes] )` Insert a node / nodes into a tree

    * Insert one node
    ```js
        var ibst = require("ibst");

        var grades = new ibst();   
        var result = grades.insert({min:80,max:100,value:"A"});

        console.log(result);

        /*
            >> Output
            { status: true }
        */         
    ```
    * Insert many nodes
    ```js
        var ibst = require("ibst");

        var grades = new ibst();   
        var result = grades.insert([
                                    {min:80,max:100,value:"A"},
                                    {min:70,max:74.9,value:"B"}
                                    ]);  
        console.log(result);
        
        /*
            >> Output
            { status: true }
        */ 
    ```
    * Insert empty node ( empty object | array )
    ```js
        var ibst = require("ibst");

        var grades = new ibst();   
        var result = grades.insert({});

        console.log(result);

        /*
            >> Output
            { status: false }
        */         
    ```    
* `search(key)` Search for a node
    ```js
        var ibst = require("ibst");

        var grades = new ibst([
                                {min:80,max:100,value:"A"},
                                {min:75,max:79.9,value:"B+"},
                                {min:70,max:74.9,value:"B"}]);  

        var result = grades.search(73); 

        console.log(result);

        /*
            >> Output
            { status: true, node: { min: 70, max: 74.9, value: 'B' } }
        */    
    ```
* `count()` Count the number of nodes in a tree
    ```js
        var ibst = require("ibst");

        var grades = new ibst([
                                {min:80,max:100,value:"A"},
                                {min:75,max:79.9,value:"B+"},
                                {min:70,max:74.9,value:"B"}]);  

        var result = grades.count(); 

        console.log(result);

        /*
            >> Output
            3
        */    
    ```

## Assumptions & Notes
- There are no overlapping intervals e.g [ 1 - 3, 2 - 5 ]
- Do not insert the string `__count__` anywhere in your values otherwise it will affect the count function.

# License

The MIT License (MIT)

Copyright (c) 2017 Bishaka Samuel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.