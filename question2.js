function fibonacci(n) {
    let a = 0
    let b = 1

    while (b < n) {
        a = b
        b = a + b
        if(a === n || b == n) {
            return true
        }
    }

    return false
}

function main () {
    let numero = 5
    const verificacao = fibonacci(numero)
    if (verificacao) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`)
    }
}

main()