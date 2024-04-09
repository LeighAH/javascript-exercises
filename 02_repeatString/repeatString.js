const repeatString = function(string, iterations) {
    if(iterations < 0) return "ERROR";
    
    let repeatedString = "";
    for(i = 0; i < iterations; i++) {
        repeatedString = repeatedString.concat(string);
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
