// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.


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
    img.addEventListener('mousemove',()=>{
        imagenGrande.src = img.src;
    })
    imagenesDiv.appendChild(img);   
});
