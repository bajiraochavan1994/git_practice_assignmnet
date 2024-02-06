function primenum(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primenum(4));