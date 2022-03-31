const modulo = 1000000007;

function isPrime(input) {
    try {
        const parseInput = parseInt(input)
        for (let i = 2; (i * i) <= parseInput; i++) {
            if ((parseInput % i) == 0)
                return false
        }
        return parseInput > 1 ? true : false
    } catch (ex) {
        return false
    }
}

function countPrime(input, index) {
    if (index == 0)
        return 1
    let temp = 0
    for (let i = 1; i <= 6; i++) {
        if ((index - i) >= 0 &&
            input[index - i] != "0" &&
            isPrime(input.substring((index - i), index))) {
            temp += countPrime(input, (index - i))
            temp %= modulo
        }
    }
    return temp
}

const input1 = "3175"
const input2 = "24"
console.log("=============== CASE 0 =============== ")
console.log("Result: ", countPrime(input1, input1.length))
console.log("=============== CASE 1 =============== ")
console.log("Result: ", countPrime(input2, input2.length))