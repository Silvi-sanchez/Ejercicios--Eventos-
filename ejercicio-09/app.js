// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

// ESTO ES UN ARRAY DE STRINGS
let imagenes = ['perro1.jpg','perro2.jpg','perro3.jpg','perro4.jpg'];

// IMAGENES DIV CONTIENE EL ELEMENTE DIV DEL HTML
let imagenesDiv = document.getElementById('imagenes');
let imagenGrande = document.getElementById('imagenGrande');

// El map va a recorrer todos los elementos del array imagenes y los pasa como parámetros uno por uno en la variable imagen
imagenes.map(imagen => {
    let img = document.createElement('img'); 
    img.src = './img/' + imagen;
    img.style.width = '100px';
    img.style.height = '100px';
    img.addEventListener('click',()=>{
        imagenGrande.src = img.src;
    })
    imagenesDiv.appendChild(img);   
});
