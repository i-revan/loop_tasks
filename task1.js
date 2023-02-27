//TASK 1 - Ədəddəki ən böyük rəqəmi çap edin. Məsələn 43192 ədədində ən böyük rəqəm 9-dur və 9 çap edilməlidir.
let n = 35758;
let max = 0;
while (n >= 1) {
    let digit = n % 10;
    n = (n-digit) / 10;
    if(digit > max){
        max = digit;
    }
}
console.log(max);