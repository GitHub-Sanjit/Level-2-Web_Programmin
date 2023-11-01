let stackInput = [];
let stackOutput = [];

function enqueue(stackInput, item) {
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
    if (stackOutput <= 0) {
        while (stackOutput.length > 0) {
            let elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }
    return stackOutput.pop();
}