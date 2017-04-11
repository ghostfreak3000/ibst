var ibst = require("../ibst");
var expect = require('chai').expect;

context("search",function(){
    context("object",function(){
        it("returns {status:true} on found",function(){
            var grades = new ibst([
                                    {min:75,max:79.9,value:"B+"},
                                    {min:80,max:100,value:"A"},
                                    {min:70,max:74.9,value:"B"}]);                          
            var exp_1 = {status:true,node:{min:70,max:74.9,value:"B"}};
            var in_1 = 73;
            expect(grades.search(in_1)).to.eql(exp_1);
            
            var exp_2 = {status:true,node:{min:75,max:79.9,value:"B+"}};
            var in_2 = 78.2;
            expect(grades.search(in_2)).to.eql(exp_2);

            var exp_3 = {status:true,node:{min:80,max:100,value:"A"}};
            var in_3 = 90;
            expect(grades.search(in_3)).to.eql(exp_3);
        });
        it("returns {status:false} on not found",function(){
            var grades = new ibst([
                                    {min:75,max:79.9,value:"B+"},
                                    {min:80,max:100,value:"A"},
                                    {min:70,max:74.9,value:"B"}]);                          
            var exp_1 = {status:false};
            var in_1 = -73;
            expect(grades.search(in_1)).to.eql(exp_1);
            
            var exp_2 = {status:false};
            var in_2 = 30;
            expect(grades.search(in_2)).to.eql(exp_2);

            var exp_3 = {status:false};
            var in_3 = 190;
            expect(grades.search(in_3)).to.eql(exp_3);
        });
    });
});