function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    let tipoMap = {
        pista: 'qtd-pista',
        superior: 'qtd-superior',
        inferior: 'qtd-inferior'
    };

    let elementoQtd = document.getElementById(tipoMap[tipo]);
    let estoqueAtual = parseInt(elementoQtd.textContent);
    
    if (qtd > estoqueAtual) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        elementoQtd.textContent = estoqueAtual - qtd;
        alert('Compra realizada com sucesso!');
    }
}
