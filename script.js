function derivar() {
  const input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    // Parsear expresión
    const expr = math.parse(input);

    // Derivar
    const derivada = math.derivative(expr, 'x');

    // Convertir a LaTeX
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
