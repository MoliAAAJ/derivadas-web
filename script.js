function derivar() {
  const input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    const derivada = nerdamer.diff(input, 'x').toTeX();

    resultadoDiv.innerHTML = `
      <p>Resultado:</p>
      <p class="math">$$${derivada}$$</p>
    `;

    if (window.MathJax) {
      MathJax.typeset();
    }

  } catch (error) {
    resultadoDiv.innerHTML = "❌ Error: función inválida";
  }
}
