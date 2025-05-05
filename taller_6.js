// Fundamentos de un API

// Conectarse a una API con fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

// API Pokemon con una función
const obtenerData = async (nombrePokemon)=>{
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
    const response = await peticion.json()
    console.log(response.name , response.sprites.front_default);
}
obtenerData('mewtwo')

// Local Storage

//Guardar un objeto en el local storage
fetch('https://jsonplaceholder.typicode.com/users/7')
    .then(response => response.json())
    .then(json => {
        {
            let usuario ={
                name:json.name,
                username:json.username,
                email:json.email
            }
            guardarLocalStorage(usuario)
        }
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}

// Obtener un objeto del local storage
const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data"
    console.log(respuesta);
}
obtenerLocalStorage()

// Eliminar un objeto del local storage
const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("No hay clave" ): localStorage.removeItem("user")
}

eliminarlocalStorage()

// Modulos
// Importar un modulo
import login from "./module.js";

login();