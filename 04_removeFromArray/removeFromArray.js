const removeFromArray = function(arr) {
    let argsArray = Array.from(arguments);
    for(i = 1; i < argsArray.length; i++)
    {
        for(j = 0; j < arr.length; j++) 
        {
            if(argsArray[i] === arr[j])
            {
                arr[j] = undefined;
            }
        }
    }

    let outputArray = [];
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] != undefined)
        {
            outputArray.push(arr[i]);
        }
    }

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
