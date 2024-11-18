let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i]);
    }
    else {
        odd.push(numbers[i]);
    }
}
console.log("Even Numbers", even);
console.log("Odd Numbers:", odd);