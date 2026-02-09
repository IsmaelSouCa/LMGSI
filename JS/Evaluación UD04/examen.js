/*
    EXAMEN JS
    
    Completa las siguientes funciones para que el carrito funcione correctamente.
*/

const PRODUCTOS = [
    {
        id: "ram-2x8gb",
        title: "Memoria RAM Forgeon 2x8Gb",
        img: "assets/ram.webp",
        price: 80.67,
        bagde: "NUEVO"
    },
    {
        id: "QE65Q7FAAU",
        title: "Samsung Q7F QE65Q7FAAU",
        img: "assets/1151-samsung.webp",
        price: 519.00,
        bagde: null
    },
    {
        id: "iphone-air-256",
        title: "Apple iPhone Air 256GB Negro Espacialb",
        img: "assets/apple-iphone-air.webp",
        price: 1099,
        bagde: "NUEVISIMO",
    },
    
]

const COUPONS = [
    {
        code: "DTO10",
        discount: 10,
        productId: null
    },
    {
        code: "RAM25",
        discount: 25,
        productId: "ram-2x8gb"
    },
    {
        code: "FREESHIP",
        discount: 0,
        freeShipping: true
    }
]

const SHIPPING_COST = 5.00;
const cart = new Map()
let activeCoupon = null; // Para guardar el cupón aplicado en el examen


// 1. Eliminar producto del carrito
// Esta función debe eliminar el producto con el id pasado por parámetro del carrito.
// No olvides volver a renderizar el carrito
function eliminarProducto(id) {
    // TODO: Implementar lógica
    cart.forEach((item) => {
        if (item.id === id){
            cart.delete(item.id)
            renderCart()
            console.log("Eliminar producto con id:", id);
            console.log(PRODUCTOS)
        }
    })
}


// 2. Aplicar descuento.
// Asignar el descuento a la variable activeCoupon
function aplicarDescuento() {
    // TODO: Implementar lógica
    const input = document.querySelector("#coupon-input")
    const couponInput = input.value
    activeCoupon = COUPONS.find((c) => c.code === couponInput)
    console.log(activeCoupon)
    console.log("Aplicar descuento");
    renderCart()
}

// 3. Cálculo de descuento
// Esta función debe devolver el importe a descontar.
function calcularDescuento(items, total, coupon) {
    // TODO: Implementar lógica
    let totalDto = 0
    if (coupon){
        if (coupon.productId){
            let item = items.find((i) => i.id === coupon.productId)
            if (item) {
                totalDto = (item.price * coupon.discount / 100)
            }
        } else {
            totalDto = (total * coupon.discount / 100)
        }
    }
    return totalDto
}

// 4. Cálculo de gastos de envío
// Esta función debe devolver el importe de los gastos de envío.
function calcularGastosEnvio(coupon) {
    if (coupon?.freeShipping) {
        return 0.00;
    }
    return SHIPPING_COST;
}


// TODO: Añadir los Event Listeners para eliminar un producto del carrito y aplicar los descuentos.

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")){
        const target = e.target
        if(!(target instanceof HTMLElement)) return;
        const pId = target.getAttribute("data-id")
        eliminarProducto(pId)
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id === "apply-coupon"){
        e.preventDefault()
        aplicarDescuento()
    }
})