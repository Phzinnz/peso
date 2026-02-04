
function calcular() {
    const peso = Number(document.getElementById('peso').value);
    const alturaCm = Number(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (peso <= 0 || alturaCm <= 0) {
        resultado.innerHTML = '❌ Preencha peso e altura corretamente.';
        return;
    }

    // converter cm para metros
    const altura = alturaCm / 100;

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    resultado.innerHTML = `
        ✅ Seu IMC é <strong>${imcFormatado}</strong><br>
        📊 Classificação: <strong>${classificacao}</strong>
    `;
}