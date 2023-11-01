function isInt(num) {
    return num % 1 === 0;
}

console.log('4-',isInt(4))
console.log('12.2-',isInt(12.2))
console.log('0.3-',isInt(0.3))