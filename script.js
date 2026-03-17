// Normaliza funciones en español a formato estándar
function normalizarFuncion(input) {
  return input
    .replace(/sen\(/gi, "sin(")
    .replace(/tg\(/gi, "tan(")
    .replace(/ln\(/gi, "log("); // opcional: unifica logs
}

function derivar() {
  const input = document.getElementById("funcion").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  // Validación básica
  if (!input) {
    resultadoDiv.innerHTML = "⚠️ Ingresá una función";
    return;
  }

  try {
    // Normalizar entrada
    const expresion = normalizarFuncion(input);

    // Verificar que Math.js esté cargado
    if (typeof math === "undefined") {
      resultadoDiv.innerHTML = "❌ Error cargando librería matemática";
      return;
    }

    // Derivar
    const derivada = math.derivative(expresion, 'x');

    // Convertir a LaTeX
    const latex = derivada.toTex();

    // Mostrar resultado
    resultadoDiv.innerHTML = `
      <p>Resultado:</p>
      <p class="math">$$${latex}$$</p>
    `;

    // Renderizar con MathJax
    if (window.MathJax) {
      MathJax.typeset();
    }

  } catch (error) {
    console.error("ERROR REAL:", error);
    resultadoDiv.innerHTML = "❌ Error: función inválida";
  }
}
