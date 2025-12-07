const lista = document.querySelector("#lista")
const descripcion = document.querySelector(".descripcion")
const btn_eliminar = document.getElementById("eliminar")
const formulario = document.getElementById("formulario")

// Contador dinámico
function actualizarDescripcion() {
    let marcados = lista.querySelectorAll(".marcado").length
    descripcion.textContent = `${marcados}/${lista.children.length} seleccionados`
}

actualizarDescripcion()

// Marcar elementos de la lista
lista.addEventListener("click", (event) => {
    const item = event.target.closest("li") // La variable item es el elemento li más cercano al cursor al hacer clic
    if (item && lista.contains(item)) {
        item.classList.toggle("marcado")
        actualizarDescripcion()
    }
})

// Eliminar elementos marcados

btn_eliminar.addEventListener("click", () => {
    lista.querySelectorAll(".marcado").forEach(item => item.remove())
    actualizarDescripcion()
})

// Formulario de acciones
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let busqueda = formulario.buscar.value.toLowerCase()
    let accion = formulario.accion.value
    if (accion === "marcar") {
        lista.querySelectorAll("li").forEach(item => {
            if (item.textContent.toLowerCase().includes(busqueda)) {
                item.classList.add("marcado")
            }
        })
    } else if (accion === "eliminar") {
        lista.querySelectorAll("li").forEach(item => {
            if (item.textContent.toLowerCase().includes(busqueda)) {
                item.remove()
            }
        })
    } else if (accion === "añadir") {
        let nuevoElemento = document.createElement("li")
        nuevoElemento.textContent = formulario.buscar.value
        lista.appendChild(nuevoElemento)
    }
    actualizarDescripcion()
})

// Evento de cambio en las opciones
formulario.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", (event) => {
        console.log(event.target.value)
    })
})