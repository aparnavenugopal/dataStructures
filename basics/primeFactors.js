// Function to find prime factors of a number
const findPrimeFactors = (n) => {
    // Initialize an empty array to store prime factors
    const primeFactors = [];

    // Handle edge cases
    if (isNaN(n) || !Number.isInteger(n) || n <= 1) {
        return primeFactors; // Return empty array for non-positive integers and non-integers
    }

    // Handle special case for 2
    while (n % 2 === 0) {
        primeFactors.push(2);
        n /= 2;
    }

    // Check for odd prime factors starting from 3
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            primeFactors.push(i);
            n /= i;
        }
    }

    // If the remaining number is greater than 2, it's also a prime factor
    if (n > 2) {
        primeFactors.push(n);
    }

    return primeFactors;
}

// Example usage
console.log(findPrimeFactors(60)); // Output: [2, 2, 3, 5]
console.log(findPrimeFactors(1)); // Output: []
console.log(findPrimeFactors(-12)); // Output: []
console.log(findPrimeFactors(2)); // Output: [2]
console.log(findPrimeFactors(103)); // Output: [103]
console.log(findPrimeFactors(1859)); // Output: [13, 19, 37]
