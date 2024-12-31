// Selección de elementos necesarios
const result = document.getElementById("result");
const operation = document.getElementById("operation");
const buttons = document.querySelectorAll(".btn");

// Variables para almacenar el estado de la calculadora
let currentOperation = ""; // Operación actual
let operator = "";         // Operador seleccionado

// Función para manejar clics en los botones
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Manejar operaciones específicas
        if (button.classList.contains("btn-op")) {
            // Si se selecciona un operador
            if (currentOperation && !operator) {
                operator = value === "X" ? "*" : value; // Convertir "X" en "*"
                currentOperation += ` ${operator} `;
                operation.textContent = currentOperation;
            }
        } else if (value === "=") {
            // Si se selecciona igual
            if (operator) {
                try {
                    const resultValue = eval(currentOperation); // Evalúa la operación
                    result.textContent = resultValue;
                    operation.textContent = currentOperation + " =";
                    currentOperation = `${resultValue}`;
                    operator = ""; // Reiniciar operador
                } catch (error) {
                    result.textContent = "Error";
                    currentOperation = "";
                    operator = "";
                }
            }
        } else if (value === "C") {
            // Si se selecciona reset
            currentOperation = "";
            operator = "";
            result.textContent = "";
            operation.textContent = "";
        } else {
            // Si se selecciona un número
            currentOperation += value;
            operation.textContent = currentOperation;
        }
    });
});
