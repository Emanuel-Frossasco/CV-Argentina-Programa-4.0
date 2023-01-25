let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//Api random user
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const nombre1 = document.querySelector('#nombre1')
const nombre2 = document.querySelector('#nombre2')
const apellido1 = document.querySelector('#apellido1')
const foto = document.querySelector('#foto')
const edad = document.querySelector('#edad')
const telefono = document.querySelector('#telefono')
const email = document.querySelector('#email')
const ciudad = document.querySelector('#ciudad')
const pais = document.querySelector('#pais')

const userGenerator = async () =>{

        let url = 'https://randomuser.me/api/';
        fetch(url)
            .then(response => response.json())
            .then(function(data){
                let userData = data.results[0];
                console.log(userData);

            foto.src=userData.picture.large
            nombre.textContent=userData.name.first
            apellido.textContent=userData.name.last
            nombre1.textContent=userData.name.first
            apellido1.textContent=userData.name.last
            nombre2.textContent=userData.name.first
            edad.textContent=userData.dob.age
            telefono.textContent=userData.cell
            email.textContent=userData.email
            ciudad.textContent=userData.location.city
            pais.textContent=userData.location.country
            })
}
document.addEventListener('DOMContentLoaded', userGenerator)