
/**
 * Manipulacion de la interfaz
 * 1. Propiedad llamada innerhtrnl dentro de ella podremos observar
 * todo el html que vive den tro de la etiqueta seleccionada
 * !si lo usamos sin cuidado podemos borrar todo lo que estaba
 * !No usar innerHTML para renderizar solo texto si estoy recibiendo y mostrando inmediatamente (propenso a inyeccion de html)
 * 2. Propiedad llamada textContent esta solo mostrara el text que tiene dentro
 */

console.log(mainEl.innerHTML);
console.log("text content");
console.log(mainEl.textContent);

mainEl.innerHTML = "<h1> Hola ch 71</h1>";
mainEl.innerHTML = card;
console.log(mainEl.innerHTML);

// mainEl.textContent += "hola";
// mainEl.textContent += card;

/**
 * insterAdjacentHTML
 * 
 */

mainEl.insertAdjacentHTML(
    "beforeend", 
    "<p>insertado por el adjacent html</p>",
);

mainEl.insertAdjacentHTML("beforeend", card);