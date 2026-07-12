var arr = [23,45,23,45];

arr.sort();

function countUniqueElements(arr) {

    var uniqueCount = arr.length > 0 ? 1 : 0;

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] != arr[i-1]) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}

var result = countUniqueElements(arr);

console.log(result);