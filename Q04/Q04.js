function rotate(str){
let str1 = str;

    for(let i = 0; i < str.length; i++){
        alert(str1);
        str1 = str1[str1.length - 1] + str1.substring(0, str1.length-1);
        
    }
    alert(str1);
}