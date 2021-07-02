// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let alimentos = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];
let tempoAlimentos = [10, 8, 15, 12, 8];

function microondas(alimento,tempo) {
    function teste (index) {
        if (tempo < tempoAlimentos[index]){
    console.log('Tempo insuficiente!');
    }
    else if (tempo >= tempoAlimentos[index]*2 && tempo < tempoAlimentos[index]*3){
        console.log('Tempo 2x maior que o necessário, sua comida queimou!!');
    }
    else if (tempo >= tempoAlimentos[index]*3){
        console.log('KABUM!!!');
    }
}

switch (alimento) {
    case 1 :
        teste(0);
        console.log(`${alimentos[0]} pronta, bom apetite!`)
        break;
    case 2 :
        teste(1);
        console.log(`${alimentos[1]} pronto, bom apetite!`)
        break;
    case 3 :
        teste(2);
        console.log(`${alimentos[2]} pronta, bom apetite!`)
        break;
    case 4 :
        teste(3);
        console.log(`${alimentos[3]} pronto, bom apetite!`)
        break;
    case 5 :
        teste (4);
        console.log(`${alimentos[4]} pronto, bom apetite!`)
        break;
    default: console.log('Prato inexistente! Por favor, selecione uma opção de 1 a 5.');
    }
}
    
    microondas(1, 15)