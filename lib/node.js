var node = function(opts){
    this.__count__ = null; //This helps the count function
    this.min = opts["min"];
    this.max = opts["max"];
    this.value = opts["value"];
    this.left = null;
    this.right = null;
    this.insert = function(opts){
        if( opts["max"] < this.min && opts["min"] < this.min ){
            if(this.left){
                return this.left.insert(opts);
            }else{
                this.left = new node(opts);
                return {status:true}
            }            
        }                    
        if(opts["max"] > this.min && opts["min"] > this.min){
            if(this.right){
                return this.right.insert(opts);
            }else{
                this.right = new node(opts);
                return {status:true};
            }
        }            
    }
}

module.exports = node;