

function isAnagram(str1, str2) {
    if (str1 == null || str2 == null || 
        str1 === "" || str2 === "" || 
        str1.length !== str2.length) {
        return false;
    }

   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

   let sortedStr1 = str1.split('').sort().join('');
   let sortedStr2 = str2.split('').sort().join('');

   return sortedStr1 === sortedStr2;  
}

var result = isAnagram("Means","Manes");

console.log(result);