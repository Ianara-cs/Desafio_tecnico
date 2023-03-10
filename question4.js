function tempoMedio (velocidadeMedia, distancia) {
    let tempo = distancia / velocidadeMedia
    return tempo  
}

function conversaoHorasParaMinutos(horas) {
    return horas * 60
}

function tempoTotalMinutos(quantidadePedagio, tempoGastoMin, tempoMedio) {
    let  tempoMedioMinutos = conversaoHorasParaMinutos(tempoMedio)

    return tempoGastoMin * quantidadePedagio + tempoMedioMinutos
}

function main () {
    let velocidadeMediaCarro = 110
    let velocidadeMediaCaminha = 80

    let distanciaEntreCidades = 100

    let tempoMedioCarro = tempoMedio(velocidadeMediaCarro, distanciaEntreCidades)
    let tempoMedioCaminha = tempoMedio(velocidadeMediaCaminha, distanciaEntreCidades)

    let tempoTotalCarro = tempoTotalMinutos(2, 0, tempoMedioCarro)
    let tempoTotalCaminha = tempoTotalMinutos(2, 5, tempoMedioCaminha)

    if(tempoTotalCaminha > tempoTotalCarro) {
        console.log("O carro estará mais próximo a cidade de Ribeirão Preto")
    } else if (tempoTotalCaminha < tempoTotalCarro) {
        console.log("O caminhão estará mais próximo a cidade de Ribeirão Preto")
    } else {
        console.log("O carro e o caminhão estão igualmente próximos a cidade de Ribeirão Preto")
    }
}

/*
Sabemos que a distância entre Ribeirão Preto e Franca é de 100 km. Como os veículos saem de cidades opostas, eles percorrerão juntos essa distância até o ponto de cruzamento na rodovia.
O carro está viajando a uma velocidade de 110 km/h. Como não há paradas para ele, ele percorrerá os 100 km em aproximadamente 54,5 minutos (ou 0,91 horas).
Já o caminhão está viajando a uma velocidade de 80 km/h. Ele terá que passar por dois pedágios, onde leva 5 minutos a mais em cada um deles. Supondo que cada pedágio leva 5 minutos para ser atravessado, o caminhão levará um total de 10 minutos extras para atravessar os pedágios.
Assim, o tempo total que o caminhão levará para percorrer os 100 km será de 1,5 horas, ou 90 minutos. Isso inclui os 10 minutos extras dos pedágios
Como os dois veículos se encontram no ponto médio da rodovia, cada um terá percorrido metade da distância entre Ribeirão Preto e Franca. Isso significa que o carro terá percorrido 50 km e o caminhão terá percorrido 50 km.
Podemos calcular a distância restante que cada veículo terá que percorrer para chegar a sua respectiva cidade. Para o carro, ele precisará percorrer mais 50 km até Ribeirão Preto. Já o caminhão precisará percorrer 50 km até Franca, além dos 10 minutos extras que ele levou nos pedágios.
Assim, podemos concluir que o carro estará mais próximo da cidade de Ribeirão Preto no momento do cruzamento na rodovia. Isso porque ele terá percorrido menos distância do que o caminhão para chegar à sua cidade de origem.
*/

main()