var node = require("./lib/node");
var clean = require("./lib/cleanStringify");
var ibst = function(nodes){        
    this.root = null;        
    this.insert = function(nodes){
        if(!nodes){
            return {status:false};
        }
        switch(nodes.constructor){
            case Object:
                if(Object.keys(nodes).length === 0){
                    return {status:false};
                }
                if(this.root){
                    return this.root.insert(nodes);
                }else{
                    nodes["__height__"] = 0;
                    this.root = new node(nodes);
                    return {status:true};
                }                  
            case Array:
                if(nodes.length === 0){
                    return {status:false};
                }
                var tree = this;
                nodes.map(function(node){
                    tree.insert(node);
                });
                return {status:true};                
        }        
    }
    this.count = function(){
        var test = clean.stringify(this);
        var count = (test.match(/__count__/g) || []).length;
        return count;
    }
    this.height = function(){        
        var string = clean.stringify(this);
        var regex = /"__height__":(\d+)/gi; 
        var match = regex.exec(string);        
        var heights = [];

        while (match != null) {
            heights.push(match[1]);
            match = regex.exec(string);
        }

        var height = Math.max.apply(null,heights);

        return height;
    }                
    this.search = function(query){
        return this.root.search(query);
    }
    if(nodes){
        this.insert(nodes);
    }
}

module.exports = ibst;