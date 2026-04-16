// Função da Cifra de César
function cifraCesar(texto, deslocamento) {
  return texto.replace(/[a-zA-Z]/g, function (letra) {
    const base = letra < 'a' ? 65 : 97;

    return String.fromCharCode(
      (letra.charCodeAt(0) - base + deslocamento) % 26 + base
    );
  });
}

// Função principal de tradução
function traduzir() {
  const campoTexto = document.getElementById('plaintext');
  const campoShift = document.getElementById('shift');
  const output = document.getElementById('output');

  const texto = campoTexto.value;
  let deslocamento = parseInt(campoShift.value);

  // Validação do deslocamento
  if (isNaN(deslocamento) || deslocamento < 1 || deslocamento > 25) {
    output.innerText = "Por favor, insira um deslocamento entre 1 e 25.";
    return;
  }

  // Traduz o texto
  const resultado = cifraCesar(texto, deslocamento);

  // Atualiza saída
  output.innerText = resultado;
}

// Atualiza automaticamente ao digitar
document.getElementById('plaintext')
  .addEventListener('input', traduzir);

document.getElementById('shift')
  .addEventListener('input', traduzir);

// Acessibilidade: permitir usar Enter no campo de número
document.getElementById('shift')
  .addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      traduzir();
    }
  });
