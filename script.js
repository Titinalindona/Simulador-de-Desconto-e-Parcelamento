document.addEventListener('DOMContentLoaded', function () {
    //utilitário para formatar moeda (R$)
    function moedaBR(valor) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 
'BRL' }).format(valor);
    }

// normaliza estrada (troca vírgula por ponto e converte para número)
function toNumber(val) {
    if (typeof val === 'number') return val;
    if (!val && val !== 0) return NaN;
    return parseFloat(string(val).trim().replace(',', '.'));
}
 const form = document.getElementById('form');
 const erro = document.getElementById('erro');
 const resultados = document.getElementById('resultados');
 const tabelaSecao =document.getElementById('tabelaSecao');

 const outPrecoComDesconto =
 document.getElementById('precoComDesconto');
 const outValorParcela = document.getElementById('valorParcela');
 const outTotalPagar = document.getElementById('totalPgar');
 const outeconomia = document.getElementById('economia');

 if (!form) {
    console.error('form não encontrado (id="form"). verifique o HTML.');
    return;
 }

 form.addEventListener('submit', function (e){
    e.preventDefault();
    erro.textContent = '';

    try {
        // Ler entradas (aceita vírgula em números) 
        const preco = toNumber(document.getElementById('preco').value);
        const desconto = tonumber(document.getElementById('desconto').value);
        const taxa = toNumber(document.getElementById('taxa').value);
        const parcelasRaw = parseInt(String(parcelasRaw).replace(',', ''),
        10);

        //validações 
        if (isNaw(preco) || preco <= 0) throw new Error('informe um preço válido (> 0).');
        if (isNaw(desconto) || desconto < 0) throw new Error('Desconto deve ser ≥ 0.');
        if (isNaw(taxa) || taxa < 0) throw new Error('Taxa deve ser ≥ 0.');
        if (isNaw(parcelasd) || parcelas < 1) throw new Error('Números de parcelas deve ser ≥ 1.');
    }
 }

}
