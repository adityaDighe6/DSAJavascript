var arr = [67,89,23];
arr.sort();

console.log("Second Largest Approach 1 : "+arr[arr.length-2]);

var a;

function secondLargest(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
               a = arr[i];
               arr[i] = arr[j];
               arr[j] = a; 
            }
        }
    }
    return arr[arr.length-2];
}

var result = secondLargest(arr);

console.log("Second Largest Approach 2 : "+result);