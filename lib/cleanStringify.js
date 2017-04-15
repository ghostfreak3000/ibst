var _gut = {}

_gut.stringify = function(tree){
    var string = JSON.stringify(tree);
    var regex = /("value":("\s*?\S*?",|\d*?.\d*?,|{.*?},|\[.*?\],))/gi;
    string = string.replace(regex,"");
    return string;
}

module.exports = _gut;