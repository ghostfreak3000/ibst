var ibst = require("../ibst");
var expect = require('chai').expect;

describe("ibst",function(){
    context("exports",function(){
        it("insert function",function(){
            var grades = new ibst();
            expect(grades.insert).to.be.a('function')
        });
        it("count function",function(){
            var grades = new ibst();
            expect(grades.count).to.be.a('function');
        });
        it("search function",function(){
            var grades = new ibst();
            expect(grades.search).to.be.a('function');
        });
    });    
    context("count",function(){
        it("counts properly",function(){
            var grades = new ibst({min:75,max:79.9,value:"B+"});            
            expect(grades.count()).to.equal(1);
            grades.insert({min:80,max:100,value:"A"});
            expect(grades.count()).to.equal(2);
        })  
    });
    context("initialize",function(){
        it("object",function(){
            var grades = new ibst({min:75,max:79.9,value:"B+"});            
            expect(grades.count()).to.equal(1);            
        });
        it("null",function(){
            var grades = new ibst();            
            expect(grades.count()).to.equal(0);            
        });
        it("array",function(){
            var grades = new ibst([
                                    {min:75,max:79.9,value:"B+"},
                                    {min:80,max:100,value:"A"},
                                    {min:70,max:74.9,value:"B"}]);              
            expect(grades.count()).to.equal(3);            
        });       
    });
});