
function add(x, y) {
    return x + y;
}

// anonymous function
const add = function (x, y) {
    return x + y
}

const add = (x, y) => {
    return x + y
}

// arrow functions
const add = (x, y) => x + y
const subtract = (x, y) => x - y
const square = x => x * x

console.log(square(5))

    // function executed imediately after definition

    (function () {
        console.log("iam run imediately")
    })()

//callbacks.
// are functions that are passed to other functions are aurguments

function num(x, callbackFn) {
    return callbackFn(x);
}

function addTen(y) {
    return y + 10
}

console.log(num(5, addTen))
