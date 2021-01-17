// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

const generos = document.getElementById('generos');
const peliculas = document.getElementById('peliculas');

//Array de objetos en este caso son peliculas
let movies = [
    {
        id: 1,
        titulo: 'La vieja guardia',
        genero: 'accion',
        img: './img/accion1.jpg'
    },
    {
        id: 2,
        titulo: 'Implacable',
        genero: 'accion',
        img: './img/accion2.jpg'
    },
    {
        id: 3,
        titulo: 'Bad Boys',
        genero: 'accion',
        img: './img/accion3.jpg'
    },
    {
        id: 4,
        titulo: 'John Wick',
        genero: 'accion',
        img: './img/accion4.jpg'
    },
    {
        id: 5,
        titulo: 'Jurassic Word',
        genero: 'aventura',
        img: './img/aventura1.jpg'
    },
    {
        id: 6,
        titulo: 'Los vengadores',
        genero: 'aventura',
        img: './img/aventura2.jpg'
    },
    {
        id: 7,
        titulo: 'Star Wars',
        genero: 'aventura',
        img: './img/aventura3.jpg'
    },
    {
        id: 8,
        titulo: 'Harry Potter',
        genero: 'aventura',
        img: './img/aventura4.jpg'
    },
    {
        id: 9,
        titulo: 'Yo antes de ti',
        genero: 'romantica',
        img: './img/romantica1.jpg'
    },
    {
        id: 10,
        titulo: 'El secreto de Adaline',
        genero: 'romantica',
        img: './img/romantica2.jpg'
    },
    {
        id: 11,
        titulo: 'Siempre el mismo día',
        genero: 'romantica',
        img: './img/romantica3.jpg'
    },
    {
        id: 12,
        titulo: 'Diario de una pasión',
        genero: 'romantica',
        img: './img/romantica4.jpg'
    },

];

//Funcion que se ejecuta al cargarse la pagina.
window.onload = function(){
    mostrarPeliculas(movies);
}

//Funcion que recorre un array de objetos (peliculas) generando las imagenes y agregandoselas al padre. 
function mostrarPeliculas(moviesToShow){
    moviesToShow.map(movie => {
        let img = document.createElement('img');
        img.src = movie.img;
        //Aplicacion de estilos css
        img.style.width = '200px';
        img.style.height = '300px';
        img.style.margin = '5px';
        img.style.border = '1px solid black';
        img.style.borderRadius = '10px';
        //Aplicacion de estilos css
        peliculas.appendChild(img);   
    });
}

function filtrarPeliculas(){
    //Obtiene el genero que seleccionó el usuario con el combo.
    let generoSeleccionado = document.getElementById('generos').value;
    //Filtra el array de objetos peliculas en base al genero seleccionado.
    let peliculasFiltradas = movies.filter(movie => movie.genero === generoSeleccionado);
    //Limpio el div que contiene las peliculas
    peliculas.innerHTML = '';
    //If que controla si se selecciona todos envia el array de peliculas completo, sino el filtrado.
    if(generoSeleccionado === 'todos'){
        mostrarPeliculas(movies);
    }
    else
    {
        mostrarPeliculas(peliculasFiltradas);
    }
}


/*
let numero = 8;
let strNumero = 'Gus esta en la casa';
let persona = {
    nombre: 'Silvina',
    apellido: 'Sanchez',
    edad: 29,
    fechaNacimiento: '26/04/1991',
    altura: 1.6
}
let estudiantesAda = [{
    nombre: 'Silvina',
    apellido: 'Sanchez',
    edad: 29,
    fechaNacimiento: '26/04/1991',
    altura: 1.6
},
{
    nombre: 'Raquel',
    apellido: 'Muriega',
    edad: 29,
    fechaNacimiento: '01/02/1991',
    altura: 1.6
}
];
*/
