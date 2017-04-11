var node = function(_node){
    this.__count__ = null; //This helps the count function
    this.min = _node["min"];
    this.max = _node["max"];
    this.value = _node["value"];
    this.left = null;
    this.right = null;
    this.insert = function(_node){
        if( _node["max"] < this.min && _node["min"] < this.min ){
            if(this.left){
                return this.left.insert(_node);
            }else{
                this.left = new node(_node);
                return {status:true}
            }            
        }                    
        if(_node["max"] > this.min && _node["min"] > this.min){
            if(this.right){
                return this.right.insert(_node);
            }else{
                this.right = new node(_node);
                return {status:true};
            }
        }            
    }
    this.search = function(query){
        if(query < this.min){
            if(this.left){
                return this.left.search(query);
            }else{
                return {status:false};
            }
        }
        if(query > this.max){
            if(this.right){
                return this.right.search(query);
            }else{
                return {status:false};
            }
        }
        return {status:true, node:{min:this.min,max:this.max,value:this.value}};
    }
}

module.exports = node;