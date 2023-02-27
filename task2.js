//TASK 2 - Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. 
//Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.
let n = 2375;
sum1 = 0;
sum2 = 0;
count = 0;
while (n >= 1) {
    let digit = n % 10;
    n = (n - digit) / 10;
    if(count % 2 == 0){
        sum1 += digit;
    }
    else{
        sum2 += digit;
    }
    count ++;
}
console.log(sum1 * sum2);
