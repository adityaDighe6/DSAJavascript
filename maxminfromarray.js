var arr = [12, 1234, 45, 67, 1];

function minMaxFromArray(arr){

    if(arr == null || arr.length == 0){
        console.log("Array is empty.");
    }

    var min = arr[0];
    var max = arr[0];

    for(var i = 0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
        else if(arr[i]>max){
            max = arr[i];
        }
    }

    console.log("Approach 2 : Minimum is : "+min+" & "+"Maxmimum is : "+max);
}

minMaxFromArray(arr);