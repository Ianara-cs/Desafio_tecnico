function letraA () {
    let array = [1, 3, 5, 7]
    let proximo = array[3] - array[2] + array[3]
    array.push(proximo)
    console.log(array)
}

function letraB() {
    let tamanhoArray = 7
    let array = new Array(tamanhoArray)
    array[0] = 2

    for (let i = 1; i < tamanhoArray ; i++) {
        array[i] =  array[i - 1] * 2 
    }

    console.log(array)
}

function letraC() {
    let tamanhoArray = 8
    let array = new Array(tamanhoArray)

    for (let i = 0; i < tamanhoArray ; i++) {
        array[i] =  i ** 2 
    }

    console.log(array)
}

function letraD() {
    let tamanhoArray = 5
    let array = new Array(tamanhoArray)
    let par = 2

    for (let i = 0; i < tamanhoArray ; i++) {
        array[i] =  par ** 2 
        par += 2
    }

    console.log(array)
}

function letraE() {
    let tamanhoArray = 7
    let array = new Array(tamanhoArray)
    array[0] = 1
    let soma = array[0]

    for (let i = 1; i < tamanhoArray ; i++) {
        array[i] =  soma
        soma = array[i - 1] + array[i]
    }

    console.log(array)   
}

function main() {
  // a) - A sequência segue uma lógica de números ímpares em ordem crescente, portanto o próximo número seria 9 
  letraA()

  // b) - Cada número é o dobro do número anterior, portanto o próximo número seria 128.
  letraB()

  // c) - A sequência é composta pelos quadrados dos números naturais em ordem crescente, 
  //portanto o próximo número seria 49, que é o quadrado do número 7.
  letraC()

  // d) - A sequência é composta pelos quadrados dos números pares em ordem crescente, 
  //portanto o próximo número seria 100, que é o quadrado do número 10.
  letraD()

  // e) - A sequência é composta pelos números da sequência de Fibonacci, onde cada número é a soma dos dois números anteriores. 
  //Portanto o próximo número seria 13 (8 + 5).
  letraE()  
}

main()