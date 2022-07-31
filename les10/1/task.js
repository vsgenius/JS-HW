const dec = document.querySelectorAll('.product__quantity-control_dec')
const inc = document.querySelectorAll('.product__quantity-control_inc')
const addcart = document.querySelectorAll('.product__add')
for (let index = 0; index < dec.length; index++) {
    dec[index].addEventListener('click', (e) => {
        --e.target.parentElement.querySelector('.product__quantity-value').innerText
    }) 
}
for (let index = 0; index < inc.length; index++) {
    inc[index].addEventListener('click', (e) => {
        ++e.target.parentElement.querySelector('.product__quantity-value').innerText
    }) 
}
for (let index = 0; index < addcart.length; index++) {
    addcart[index].addEventListener('click', (e) => {
        const productCart = document.querySelector('.cart__products')
        const count =e.target.parentElement.querySelector('.product__quantity-value').innerText
        const id = e.path[3].getAttribute('data-id')
        const img = e.path[3].querySelector('.product__image').getAttribute('src')
        const cart = document.querySelectorAll('.cart__product')
        if (document.querySelectorAll('.cart__product').length==0) {
            productCart.insertAdjacentHTML('beforeEnd','<div class="cart__product" data-id="'+id+'"><img class="cart__product-image" src="'+img+'"><div class="cart__product-count">'+count+'</div></div>')
        }
        else {
            // console.log(Array.from(cart).indexOf(id,0))
            for (let index = 0; index < cart.length; index++) {
                if (id==cart[index].getAttribute('data-id')) {
                    cart[index].querySelector('.cart__product-count').textContent=Number(cart[index].querySelector('.cart__product-count').textContent)+Number(count)
                    return
                }
            }
            productCart.insertAdjacentHTML('beforeEnd','<div class="cart__product" data-id="'+id+'"><img class="cart__product-image" src="'+img+'"><div class="cart__product-count">'+count+'</div></div>')

        }
    }) 
}