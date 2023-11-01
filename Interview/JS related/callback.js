function modifyArray(arr,callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback that was passed as argument
    callback();
}

let arr = [1, 2, 3, 4, 5];
modifyArray(arr, function () {
    console.log("arr has been modified", arr);
})