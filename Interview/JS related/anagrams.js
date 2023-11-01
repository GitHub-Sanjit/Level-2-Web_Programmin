let firstWord = "Mary";
let secondWord = "Army";

let c = isAnagram(firstWord, secondWord);

function isAnagram(first, second) {
    let a = first.toLowerCase();
    let b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}

console.log(c);