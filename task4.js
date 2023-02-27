//TASK 4 - Verilmiş ədədin sadə və ya mürəkkəb olduğunu tapın. (Sadə ədədlər sadəcə 1ə və özünə bölünən ədədlərdir).
//Əgər sadə ədəddirsə "prime", mürəkkəb ədəddirsə "composite" çap olunsun ekrana.
let n = 5;
let count = 0;
for (let i = 1; i <= n / 2; i++) {
  if (n % i == 0) {
    count++;
  }
}
if (count == 1) {
  console.log("prime");
} else {
  console.log("composite");
}
