var original = "Aditya";
var reversed = "";

function reverseString(){
    for(var i = original.length-1; i>=0; i--){
        reversed += original[i];
    }
    console.log(reversed);
}

reverseString(original);