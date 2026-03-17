function derivar() {
  const input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    const derivada = math.derivative(input, 'x');
    const latex = derivada.toTex();

    resultadoDiv.innerHTML = `
      <p>Resultado:</p>
      <p class="math">$$${latex}$$</p>
    `;

    if (window.MathJax) {
      MathJax.typeset();
    }

  } catch (error) {
    console.error(error);
    resultadoDiv.innerHTML = "❌ Error: función inválida";
  }
}
