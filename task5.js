//TASK 5 - 1-dən M-ədək ədədlər içərisində 15-ə bölünən ədədlərin sayını tapan alqoritm.
let M = 450;
count = 0;
for (let i = 1; i < M; i++) {
  if (i % 15 == 0) {
    count++;
  }
}
console.log(count);
//We can do same thing without using a loop:
//console.log((M-15)/15);
//if the interval includes M then:
//console.log((M-15)/15+1)