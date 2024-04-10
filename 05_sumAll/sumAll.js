const sumAll = function(start, end) {

    if(typeof(start) != "number" || typeof(end) != "number" || start < 0 || end < 0){
        return "ERROR";
    }

    let sum = 0;
    for(i = (start < end ? start: end); i <= (start < end ? end : start); i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
