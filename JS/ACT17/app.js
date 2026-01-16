/*****************************
1. Seleccionar elementos del DOM
*****************************/
const form = document.querySelector("#formTarea")
const lista = document.querySelector("#listaTareas")
const btnTodas = document.querySelector("#mostrarTodas")
const btnCompletadas = document.querySelector("#mostrarCompletadas")
const btnPendientes = document.querySelector("#mostrarPendientes")
const btnEliminarCompletadas = document.querySelector("#eliminarCompletadas")
const contadorElement = document.querySelector("#contador") // Asegúrate que existe en HTML

/*****************************
2. Estado inicial
*****************************/
let estado = [
    { id: 1, text: "Programar", marked: false },
    { id: 2, text: "Ir a clase", marked: false },
    { id: 3, text: "Ganar dinero", marked: false }
]

let nextId = 4

/*****************************
3. Funciones de renderizado
*****************************/
function renderizar() {
    lista.innerHTML = ""
    estado.forEach((tarea) => {
        const li = document.createElement("li")
        li.textContent = tarea.text
        li.dataset.id = tarea.id
        if (tarea.marked) {
            li.classList.add("completada")
        }
        lista.appendChild(li)
    })
}

function actualizarContador() {
    const marcadas = estado.filter((t) => t.marked).length
    const total = estado.length
    if (contadorElement) {
        contadorElement.textContent = `${marcadas}/${total} seleccionados`
    }
}

/*****************************
4. Eventos del formulario
*****************************/
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const tarea = form.tarea.value.trim()

    if (tarea === "") {
        alert("No puedes añadir una tarea vacía.")
        return
    }

    estado.push({ id: nextId++, text: tarea, marked: false })
    renderizar()
    actualizarContador()
    form.reset()
    form.tarea.focus()
})

/*****************************
5. Click en tareas para marcar/desmarcar
*****************************/
lista.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const id = parseInt(event.target.dataset.id)
        const tarea = estado.find((t) => t.id === id)
        if (tarea) {
            tarea.marked = !tarea.marked
            renderizar()
            actualizarContador()
        }
    }
})

/*****************************
6. Eliminar completadas
*****************************/
btnEliminarCompletadas.addEventListener("click", () => {
    const completadas = estado.filter((t) => t.marked)

    if (completadas.length === 0) return

    const seguro = confirm("¿Eliminar todas las tareas completadas?")
    if (!seguro) return

    estado = estado.filter((t) => !t.marked)
    renderizar()
    actualizarContador()
})

/*****************************
7. Filtrar elementos
*****************************/
function mostrarTodas() {
    marcarBotonActivo(btnTodas)
    lista.querySelectorAll("li").forEach((li) => {
        li.classList.remove("ocultar")
    })
}

function mostrarCompletadas() {
    marcarBotonActivo(btnCompletadas)
    lista.querySelectorAll("li").forEach((li) => {
        li.classList.toggle("ocultar", !li.classList.contains("completada"));
    })
}

function mostrarPendientes() {
    marcarBotonActivo(btnPendientes)
    lista.querySelectorAll("li").forEach((li) => {
        li.classList.toggle("ocultar", li.classList.contains("completada"))
    })
}

function marcarBotonActivo(btn) {
    [btnTodas, btnCompletadas, btnPendientes].forEach((b) => {
        b.classList.toggle("activo", b === btn)
    })
}

btnTodas.addEventListener("click", mostrarTodas)
btnCompletadas.addEventListener("click", mostrarCompletadas)
btnPendientes.addEventListener("click", mostrarPendientes)

/*****************************
8. Inicializar
*****************************/
renderizar()
actualizarContador()
mostrarTodas()