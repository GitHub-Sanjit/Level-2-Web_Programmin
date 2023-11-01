function counter() {
    let _counter = 0;

    return {
        add:function(increment) {
            _counter += increment;
        },
        retrieve: function () {
            return `The Counter is currently at ${_counter}`;
        }
    }
}

let c = counter()
c.add(5);
c.add(9);
a = c.retrieve();
console.log(a);