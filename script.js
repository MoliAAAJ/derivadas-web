function normalizarFuncion(input) {
  // Reemplaza log(...) por ln(...)
  return input.replace(/log\(/g, "ln(");
}

function derivar() {
  let input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    // Normalizar entrada
    input = normalizarFuncion(input);

    // Parsear expresión
    const expr = nerdamer(input);

    // Derivar
    const derivada = nerdamer.diff(expr, 'x');

    // Pasar a LaTeX
    const latex = derivada.toTeX();

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
