

function addToCart(_id) {
    const product = PRODUCTOS.find((p)=>(p.id === _id))
    const existing = cart.get(_id)
    if(!existing){
        cart.set(_id, {...product, quantity: 1})
    }else {
        cart.set(_id, {...existing, quantity: existing.quantity +1})
    }

    renderCart()
}


function renderCart() {
    // Select the cart container
    const cartSection = document.querySelector(".cart");
    if (!cartSection) return;

    let total = 0;
    
    // Header for the ticket
    let htmlContent = `
        <div class="cart-header">
            <h2>TICKET DE COMPRA</h2>
            <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        </div>
        <div class="cart-items">
    `;

    const items = Array.from(cart.values());

    if (items.length === 0) {
        htmlContent += `<div class="empty-cart">Tu carrito está vacío</div></div>`;
        htmlContent += `<div class="cart-footer" style="display: none;"></div>`;
    } else {
        items.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            htmlContent += `
                <div class="cart-item">
                     <button class="btn-delete" title="Eliminar producto" data-id="${item.id}">×</button>
                    <img src="${item.img}" alt="${item.title}">
                    <div class="cart-item-info">
                        <span class="cart-item-title">${item.title}</span>
                        <span class="cart-item-price">${item.quantity} x ${item.price.toFixed(2)} €</span>
                    </div>
                    <span class="cart-item-total">${itemTotal.toFixed(2)} €</span>
                </div>
            `;
        });

        // EXAMEN: Estas funciones se definen en examen.js
        const discountAmount = typeof calcularDescuento === "function" ? calcularDescuento(items, total, activeCoupon) : 0;
        const finalShipping = typeof calcularGastosEnvio === "function" ? calcularGastosEnvio(activeCoupon) : SHIPPING_COST;
        
        const finalTotal = total - discountAmount + finalShipping;

        htmlContent += `
            </div>
            <div class="cart-footer">
                <!-- EXAMEN: Descuentos -->
                <div class="cart-discount">
                    <input type="text" id="coupon-input" placeholder="Código de descuento" value="${activeCoupon ? activeCoupon.code : ''}">
                    <button id="apply-coupon" type="button">Aplicar</button>
                </div>

                <div class="cart-summary">
                    <div class="cart-summary-line">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)} €</span>
                    </div>
                    ${discountAmount > 0 ? `
                    <div class="cart-summary-line" style="color: #27ae60;">
                        <span>Descuento (${activeCoupon.code})</span>
                        <span>-${discountAmount.toFixed(2)} €</span>
                    </div>` : ''}
                    <div class="cart-summary-line">
                        <span>Gastos de envío</span>
                        <span>${finalShipping.toFixed(2)} €</span>
                    </div>
                    <div class="cart-summary-line total-line">
                        <span>TOTAL</span>
                        <span id="total-cart">${finalTotal.toFixed(2)} €</span>
                    </div>
                </div>
            </div>
        `;
    }

    cartSection.innerHTML = htmlContent;
}

function renderProducts(){
    const productContainer = document.querySelector("#productos")
    if(!productContainer) return;

    const p = PRODUCTOS.map((p, i)=>{
        
        const badge = p.bagde ? 
        `<span class="etiqueta">${p.bagde}</span>`
        : ""


        const classArticle = p.bagde? "producto oferta": "producto";

        return `
        <article class="${classArticle}">
            ${badge}
            <img src="${p.img}"
                alt="${p.title}">
            <h3>${p.title}</h3>
            <p class="precio">${p.price} €</p>
            <button data-add-to-cart="${p.id}" type="button" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                Añadir al carrito
            </button>
        </article>
        `
    })

    productContainer.innerHTML = p.join("")
}

document.addEventListener("click", (event)=>{
    const target = event.target
    if(!(target instanceof HTMLElement)) return;

    const pId = target.getAttribute("data-add-to-cart")

    if(pId){
        addToCart(pId)
    }


})




renderCart()
renderProducts()