//TASK 3 - Verilmiş ədədin 2nin qüvvəti olub-olmadığını tapın. Məsələn 8 daxil olunarsa true, 5 daxil olunarsa false çap etməlidir.
let n = 5122;
let count = 0;
for(let i = 0;i<=n/2; i++){
    if(n == 2 ** i){
        count++;
    }
}
if(count == 1){
    console.log(true);
}
else{
    console.log(false);
}