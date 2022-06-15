let catalog= {
    1:{'id':1,'name':'Брюки','description':'Брюки','sizes':'L','price':3000,'available':true},
    2:{'id':2,'name':'Куртка','description':'Куртка','sizes':'XL','price':10000,'available':true},
    3:{'id':3,'name':'Рубашка','description':'Рубашка','sizes':'L','price':4000,'available':true},
    4:{'id':4,'name':'Туфли','description':'Туфли','sizes':'45','price':8000,'available':false},
    5:{'id':5,'name':'Носки','description':'Носки','sizes':'43-45','price':500,'available':false}}

let cart= {
    1:{amount:2},
    2:{amount:1}}

function addtocart(id,amount){
    if (catalog[id].available == true) {
        if (cart[id]) {
            cart[id].amount+=amount
            console.log('Товар добавлен в корзину. Кол-во: ',cart[id].amount)
        } else {
            cart[id] = {'amount':amount}
            console.log('Товар добавлен в корзину.')
            console.log(cart)
        }
    } else {
        console.log('товар не доступен')
    }
}
function delfromcart(id,amount){
    if (cart[id]) {
            if (cart[id].amount==amount){
                delete cart[id]
                console.log('Товар удален из корзины.')
                console.log(cart)
            } else {
                cart[id].amount-=amount
                console.log('Товар удален из корзины. Осталось: ',cart[id].amount)
            }
        } 
    }

function delfullcart(){
        for (id in cart) {
            delete cart[id]
        }
        console.log('Корзина очищена')
        console.log(cart)
        }

function sumamount(){
    let report = {'sum':0,'amount':0}
    for (id in cart) {
        report['sum'] +=catalog[id].price*cart[id].amount
        report['amount'] +=cart[id].amount
    }
    console.log(report)
}

addtocart(3,2)
delfromcart(3,1)
delfromcart(2,1)
sumamount()
delfullcart()