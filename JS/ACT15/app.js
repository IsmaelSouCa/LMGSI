console.log("App iniciada");
console.warn("Advertencia de prueba");
console.error("Error de prueba");
console.table(["HTML", "CSS", "JS"])

let usuario = "Invitado";
const VERSION = "1.0";
let visitas = 0;
console.log(usuario);
console.log("Versión de la aplicación: " + VERSION);
console.log("Número de visitas: " + visitas);

let edad = 20;
let activo = true;
let productos = ["Pan", "Leche", "Huevos"];
let perfil = {nombre: "Ana", puntos: 120};
let grande = 9007199254740993n;

console.log(typeof edad);
console.log(typeof activo);
console.log(typeof productos);
console.log(typeof perfil);
console.log(typeof grande);

console.table(productos);
console.table(perfil);

console.log(5 + "3");
console.log(5 - "3");
console.log(5 * 2);
console.log(false || "valor");

console.log(null ?? "por defecto");

let usuarioData = {
    nombre: "Ismael",
    edad: 20,
    premium: false,
    listaCompras: ["Leche", "Pollo", "Arroz"]
}

console.table(usuarioData);

usuarioData.premium = true;
usuarioData.listaCompras.push("Pan");

console.table(usuarioData);

if (usuarioData.premium === true){
    console.log("Usuario premium");
} else {
    console.log("Usuario estándar");
}

let nota = 6;

if (nota < 5){
    console.log("Suspenso");
} else if (nota >= 5 && nota < 9){
    console.log("Aprobado");
} else {
    console.log("Sobresaliente");
}

let fruta = "Manzana";
console.log("Fruta seleccionada: " + fruta);

switch (fruta){
    case "Plátano":
        console.log("Precio: 1.00€");
        break;
    case "Manzana":
        console.log("Precio: 1.20€");
        break;
    case "Naranja":
        console.log("Precio: 0.80€");
        break;
    default:
        console.log("Fruta no disponible");
}

for (let i = 0; i < usuarioData.listaCompras.length; i++){
    console.log("Producto " + i + ": " + usuarioData.listaCompras[i]);
}

for (let producto of usuarioData.listaCompras) {
    console.log("Producto: " + producto);
}

for (let elemento in usuarioData.listaCompras) {
    console.log("Producto: " + usuarioData.listaCompras[elemento]);
}