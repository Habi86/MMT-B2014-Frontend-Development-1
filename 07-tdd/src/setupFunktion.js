module.exports = function changeName(array, doSomething) {
    if (doSomething === 1) {
        array.unshift("Hallo")
        return array
    }

    if (doSomething === 2) {
        return array.shift()
    }

    if (doSomething === 3) {
        array.push("Bye")
        return array
    }

    if (doSomething === 4) {
        return array.pop()
    }
    throw new Error("Function does not exist!")
}
