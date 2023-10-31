function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },

        get: function () {
            return count;
        }
    }
}

let counter = createCounter();
counter.increment();
console.log(counter.get());