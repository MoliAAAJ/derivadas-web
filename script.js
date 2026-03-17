function derivar() {
  const input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    // Calcula derivada
    const expr = nerdamer(input);
    const derivada = nerdamer.diff(expr, 'x');

    // Convertir a LaTeX
    const latex = derivada.toTeX();

    resultadoDiv.innerHTML = `
      <p>Resultado:</p>
      <p class="math">$$${latex}$$</p>
    `;

    if (window.MathJax) {
      MathJax.typeset();
    }

  } catch (error) {
    console.error(error); // IMPORTANTE para debug
    resultadoDiv.innerHTML = "❌ Error: función inválida";
  }
}
