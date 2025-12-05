// 1 - Selección de elementos
const titulo = document.getElementById("titulo");

const descripcion = document.querySelector(".descripcion");

const lista = document.querySelector("#lista")

const botones = document.querySelectorAll("button")

console.log(titulo, descripcion, lista, botones)

// 2 - Manipulación de contenido

titulo.textContent = "Manipulación del DOM"

descripcion.innerHTML = "Este <strong>texto</strong> ha sido manipulado"
descripcion.classList.add("resaltado")
descripcion.setAttribute("data-editado", true)

// 3 - Agregar y eliminar elementos

const btn_agregar = document.querySelector("#agregar")
const btn_eliminar = document.querySelector("#eliminar")

function addLi(texto){
    const li = document.createElement("li")
    li.textContent = texto
    lista.appendChild(li)
}

btn_agregar.addEventListener("click",()=>{
    addLi(`Elemento ${lista.children.length + 1}`)
})

btn_eliminar.addEventListener("click", ()=>{
    if(lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})

const formulario = document.querySelector("#formulario")

console.dir(formulario)

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    addLi(formulario.nombre.value)
    e.target.reset()
})