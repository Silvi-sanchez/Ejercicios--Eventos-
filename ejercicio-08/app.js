// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px  orange


// window.onscroll = function(event) {
//     let top = window.pageXOffset || document.documentElement.scrollTop;

//     if(top >= 0 && top <= 500){
//         document.getElementById('body').style.backgroundColor = 'red';
//     }
//     if(top >= 501 && top <= 1000){
//         document.getElementById('body').style.backgroundColor = 'green';
//     }
//     if(top >= 1001 && top <= 1500){
//         document.getElementById('body').style.backgroundColor = 'blue';
//     }
//     if(top >= 1501 && top <= 2000){
//             document.getElementById('body').style.backgroundColor = 'orange';
//     }
// };

       // OTRA FORMA DE RESOLUCION

window.addEventListener('scroll', () =>{
    const body = document.getElementById('body');
    const coordenada = window.scrollY;
    console.log(coordenada);
    if(coordenada <= 500){
        body.style.backgroundColor = 'red';
    }else if(coordenada > 500 && coordenada <= 1000){
        body.style.backgroundColor = 'green';
    }else if(coordenada > 1000 && coordenada <= 1500){
        body.style.backgroundColor = 'blue';
    }else if(coordenada > 1500 && coordenada <= 2000){
        body.style.backgroundColor = 'orange';
    }
})