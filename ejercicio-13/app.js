// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.


// Array imagenes

let img = [
    {
        id: 1,
        nombre: 'suricata',
        img: 'imagen1.jpg',
    },
    {
        id: 2,
        nombre: 'mono',
        img: 'imagen2.jpg',
    },
    {
        id: 3,
        nombre: 'rinoceronte',
        img: 'imagen3.jpg',
    },
    {
        id: 4,
        nombre: 'tigre',
        img: 'imagen4.jpg',
    },
    {
        id: 5,
        nombre: 'panda',
        img: 'imagen5.jpg',
    },
    {
        id: 6,
        nombre: 'koala',
        img: 'imagen6.jpg',
    },
    {
        id: 7,
        nombre: 'perezoso',
        img: 'imagen7.jpg',
    },
    {
        id: 8,
        nombre: 'llamita',
        img: 'imagen8.jpg',
    },
    {
        id: 9,
        nombre: 'perro',
        img: 'imagen9.jpg',
    },
    {
        id: 10,
        nombre: 'uron',
        img: 'imagen10.jpg',
    },

]

window.onload = function() {
    imagendiv();
};


function imagendiv() {
    let div = document.getElementById("imagenes"); 
    

    img.map(function(animal) {
        let imagen = document.createElement("img"); 
        imagen.src = './img/' + animal.img; 
        imagen.id = animal.id;
        imagen.onclick = function(){
            let div2 =document.getElementById('favoritos');
            if(!existeEnFavoritosUnaImgConEsteId(imagen.id))
            {
                let imagen = document.createElement("img"); 
                imagen.onclick = function(){
                    div2.removeChild(imagen);
                }
                imagen.src = './img/' + animal.img; 
                imagen.id = animal.id;
                div2.appendChild(imagen)
            }
        };
        div.appendChild(imagen); 
    });
}

function existeEnFavoritosUnaImgConEsteId(id){
    let div2 =document.getElementById('favoritos');
    let imagenesFavoritos = div2.getElementsByTagName('img');
    for(let i=0; i<imagenesFavoritos.length;i++)
    {
       if(imagenesFavoritos[i].id === id)
       {
           return true;
       }
    }
    return false;

}
