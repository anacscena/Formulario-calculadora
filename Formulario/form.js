function validarCampo(input, errorId) {
    const errorElement = document.getElementById(errorId);
    const valor = parseFloat(input.value);
    
    if (!valor || valor <= 0) {
        errorElement.style.display = 'block';
        input.style.borderColor = '#ff4444';
        return false;
    } else {
        errorElement.style.display = 'none';
        input.style.borderColor = '#ddd';
        return true;
    }
}

function calcularIMC(event) {
    event.preventDefault();
    
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');

    const pesoValido = validarCampo(peso, 'pesoError');
    const alturaValida = validarCampo(altura, 'alturaError');

    if (!pesoValido || !alturaValida) {
        return;
    }

    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2);
    let categoria = '';
    let cor = '';

    if (imc < 18.5) {
        categoria = 'Abaixo do Peso';
        cor = '#ffd700';
    } else if (imc < 24.9) {
        categoria = 'Peso Normal';
        cor = '#90EE90';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
        cor = '#FFA500';
    } else if (imc < 34.9) {
        categoria = 'Obesidade Grau I';
        cor = '#FF6347';
    } else if (imc < 39.9) {
        categoria = 'Obesidade Grau II';
        cor = '#FF4500';
    } else {
        categoria = 'Obesidade Grau III';
        cor = '#FF0000';
    }

    resultadoDiv.style.display = 'block';
    resultadoDiv.style.backgroundColor = cor;
    resultadoDiv.innerHTML = `
        <strong>Seu IMC é: ${imc.toFixed(1)}</strong>
        <span class="status">Classificação: ${categoria}</span>`;
}