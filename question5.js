
function main() {
    let frase = "inverta os caracteres de um string";
    let stringInvertida = "";
    
    for (let i = frase.length - 1; i >= 0; i--) {
      stringInvertida += frase[i];
    }
    
    console.log(stringInvertida); 
}

main()