// Add your functions here

const map = function(array, fn){
    const result = [];
    for(let i = 0; i < array.length; i++){
        result.push(fn(array[i]));
    };
    return result;
};


// result needs to start as a truthy value when checking that all values are truthy
// but needs to start as 0 when doing math
// if nothing is passed in for init //=> falsely
const reduce = function(array, fn, init){
    let result = init;
    for(let i = 0; i < array.length; i++){
        if (result === undefined){
            result = array[i];
        }
        else {
            result = fn(array[i], result);
        }
    };
    return result;
};