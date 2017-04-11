var ibst = require("../ibst");
var expect = require('chai').expect;

context("insert",function(){
    context("object",function(){
        it("returns {status:true} on success",function(){        
            var exp = {status:true}; 
            var grades = new ibst({min:75,max:79.9,value:"B+"});   
            var result = grades.insert({min:80,max:100,value:"A"});   
            expect(result).to.eql(exp);                                  
        });
        it("returns {status:true} on success with null root",function(){        
            var exp = {status:true}; 
            var grades = new ibst();   
            var result = grades.insert({min:80,max:100,value:"A"});   
            expect(result).to.eql(exp);                                  
        });
        it("returns {status:false} on null",function(){        
            var exp = {status:false}; 
            var grades = new ibst();   
            var result = grades.insert();   
            expect(result).to.eql(exp);                                  
        });
        it("returns {status:false} on empty",function(){        
            var exp = {status:false}; 
            var grades = new ibst();   
            var result = grades.insert({});   
            expect(result).to.eql(exp);                                  
        });
    });
    context("array",function(){
        it("returns {status:true} on success",function(){        
            var exp = {status:true}; 
            var grades = new ibst({min:75,max:79.9,value:"B+"});   
            var result = grades.insert([
                                        {min:80,max:100,value:"A"},
                                        {min:70,max:74.9,value:"B"}
                                        ]);   
            expect(result).to.eql(exp);   
            expect(grades.count()).to.equal(3);                               
        });
        it("returns {status:true} on success with null root",function(){        
            var exp = {status:true}; 
            var grades = new ibst();   
            var result = grades.insert([
                                        {min:75,max:79.9,value:"B+"},
                                        {min:80,max:100,value:"A"},
                                        {min:70,max:74.9,value:"B"}]);   
            expect(result).to.eql(exp);   
            expect(grades.count()).to.equal(3);                               
        });
        it("returns {status:false} on empty",function(){        
            var exp = {status:false}; 
            var grades = new ibst();   
            var result = grades.insert([]);   
            expect(result).to.eql(exp);   
            expect(grades.count()).to.equal(0);                               
        });            
    });
});