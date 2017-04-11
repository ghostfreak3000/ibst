var node = require("./lib/node");

var ibst = function(opts){        
    this.root = null;        
    this.insert = function(opts){
        if(!opts){
            return {status:false};
        }
        switch(opts.constructor){
            case Object:
                if(Object.keys(opts).length === 0){
                    return {status:false};
                }
                if(this.root){
                    return this.root.insert(opts);
                }else{
                    this.root = new node(opts);
                    return {status:true};
                }                  
            case Array:
                if(opts.length === 0){
                    return {status:false};
                }
                var tree = this;
                opts.map(function(opt){
                    tree.insert(opt);
                });
                return {status:true};                
        }        
    }
    this.count = function(){
        var test = JSON.stringify(this);
        var count = (test.match(/__count__/g) || []).length;
        return count;
    }
    
    if(opts){
        this.insert(opts);
    }

}

module.exports = ibst;