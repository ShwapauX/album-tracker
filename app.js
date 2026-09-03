/** 
 * Todo 10 que seleccionemos al principio
 * Debe ser seleccionado mediante el document
 * 
 * Opciones de seleccion
 * Clasicas
 * getElementById
 * getElementByClassName
 * 
 * Modernas
 * Nos permiten seleccionar por un selector css
 * selector css
 * etiqueta por ejemplo form
 * clae . por ejemplo .form-control
 * id # por ejepmlo #title
 * 
 * getQuerySelector()  //si usamos un selector como de clase solo va a seleccionar la primera
 * querySelector
 * 
 * 
*/

const formEl = document.getElementById("album-form");
console.log(formEl);
const mainEl = document.querySelector("#album-container");
console.log(mainEl);

/**
 * Eventos
 * Es cualquier accion que realiza eI usuario en la pagina web
 * Escuchar por el evento
 * Escucharnos por un evento para que cuando ocurra desencadene una respuesta
 * 
 * 1. Agrear un e vent listener del evento suernit
 * 2. prevenir el comportamiento por default
 * 3. construir un form data dandole el elemerro formulario
 * 4. extraer la informacion del formData y guardarlo en un array de arrays usando el spread operators
 * El spread operator desempaqueta la informacion de un iterable y la guarda en otro
 * 5. crear un objeto con la informacion usando Object.fromEntries() 
 * object from entries recibe un array de arrays
 */

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(formData.get("title")); //obtiene un solo dato
    console.log(formData);
    // ... extrae contenido de un elemento y lo introduce en un arrays
    const dataArray = [... formData];
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);

    // const album = Object.fromEntries([... new FormData(formEl)])       esto es como hacer todo en una sola linea
});

// se crea una variable para crear la card en base a la informacion obtenida
const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
`;
