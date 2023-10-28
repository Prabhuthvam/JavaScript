function isPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0) count++
    }
    if(count==2) 
    return true
    else
    return false
}
console.log(isPrime(16))
function findFirstNPrimes(n) {
    const primes = [];
    let currentNumber = 2;
    let index = 0;

    while (index < n) {
        if (isPrime(currentNumber)) {
            primes[index] = currentNumber;
            index++;
        }
        currentNumber++;
    }

    return primes;
}

const first7Primes = findFirstNPrimes(7);
console.log("The first 7 prime numbers between 1 and 100 are: " + first7Primes.join(", "));





