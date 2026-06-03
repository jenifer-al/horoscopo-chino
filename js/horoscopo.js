// Mapeo de elementos
const inputMes = document.getElementById("mes");
const inputAnio = document.getElementById("anio");
const botonCalcular = document.getElementById("calcular");
const cajaResultado = document.getElementById("resultado");

// Array con los signos (index 0 = Mono, index 4 = Rata, etc.)
const signosChinos = [
    "Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", 
    "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"
];

// Función flecha principal
const calcular = () => {
    const mes = parseInt(inputMes.value);
    const anio = parseInt(inputAnio.value);

    // Validación
    if (isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12 || anio < 1900) {
        cajaResultado.innerHTML = "<span class='text-red-600 font-bold'>Por favor, introduce datos válidos.</span>";
        return;
    }

    // Cálculo del residuo (El módulo nos da el índice del array)
    const resto = anio % 12;
    const signo = signosChinos[resto];

    // Mostrar resultado
    cajaResultado.innerHTML = `
        <div class="mt-4 text-center border-t border-amber-200 pt-4">
            <p class="font-bold text-xl">Tu signo es: ${signo}</p>
            <img src="imagenes/${signo.toLowerCase()}.png" alt="${signo}" class="mx-auto mt-2 w-32">
        </div>
    `;
};

// Escuchador de eventos
botonCalcular.addEventListener("click", calcular);
