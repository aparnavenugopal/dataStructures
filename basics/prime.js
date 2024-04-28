const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (var i = 5; i * i <= n; i = i + 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    
    // If the loop completes without finding a divisor, 'n' is prime
    return true;
  }
  
  const t = isPrime(73643);
  console.log(t); // Output: true
  