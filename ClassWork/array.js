const prompt = require("prompt-sync")({sigint:true});

function findMinMax(arr)
{
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return {min, max};
}
console.log(findMinMax([1, 2, 20, 8, 29, 11]));

// The splice methode: Change the content of an array by replacing or removing the existing elements