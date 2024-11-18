function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i * i <= num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function prime(numbers) {
    let max = 0;
    let min = 0;
    let numbers = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];
    for (let i = 0; i < numbers.length; i++){
        if (isPrime(numbers[i])) {
            console.log(numbers[i]);
        }
    }
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > max) {
            max += number[i];
        }

    }
    console.log(max);
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < min) {
            min += number[i];
        }

    }
    console.log(min);
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i] + sum;

    }
    console.log(sum);
}
