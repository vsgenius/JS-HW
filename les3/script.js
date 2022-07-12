class Good {
    constructor (id,name,description,sizes,price,available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable (available) {
        this.available = available;
    }
}
class GoodsList {
    constructor (goods,filter,sortPrice,sortDir){
        this.goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list(){
        const goods_new = this.goods.filter((good) => good.available==true)
        if (sortPrice) {
            if (this.sortDir) 
            {return goods_new.sort((good1,good2)=>good1.price>good2.price ?1:-1)}
            else {
                return goods_new.sort((good1,good2)=>good1.price>good2.price ?-1:1)
            }
            }
        else {
            return goods_new
        }
    }
    add (good){
        this.goods.push(good)
    }
    remove(id) {
        delete this.goods[id]
    }
}
class BasketGood extends Good {
    constructor (id,name,description,sizes,price,available,amount) {
        super(id,name,description,sizes,price,available);
        this.amount = amount;
    }
}
class Basket {
    constructor (goods) {
        this.goods = goods;
    }
    get totalAmount() {
        if (this.goods.lenght>1) {
            return this.goods.reduce((good)=>good.amount+good.amount)
        }
        else {
            return this.goods[0].amount
        }
    }
    get totalSum() {
        if (this.goods.lenght>1) {
        return this.goods.reduce((good)=>good.price+good.price)}
        else {
            return this.goods[0].price
        }
    }
    add(good, amount)  {
        if (this.goods.indexOf(good)!=-1) {
            good.amount += amount 
        }
        else {
            this.goods.push(good)
            good.amount = amount 
        }
    }
    remove(good, amount) {
        good.amount -= amount
        if (good.amount==0){
            this.goods.pop(good)
        }
    }
    clear()     {
        this.goods.splice(0,this.goods.length)
    }
    removeUnavailable() {
        const goods_new = this.goods.filter((good) => good.available==true)
        return this.goods = goods_new
    }
}


const good1 = new Good (
    id = 1,
    name = 'qqq',
    description = 'description',
    sizes = (45,48,50),
    price = 10090,
    available = true,
)
const good2 = new Good (
    id = 2,
    name = 'ww',
    description = 'descriptionw',
    sizes = (45,48,50),
    price = 1000,
    available = false,
)
const good3 = new Good (
    id = 3,
    name = 'ww',
    description = 'descriptionw',
    sizes = (45,48,50),
    price = 1000,
    available = true,
)
const good4 = new Good (
    id = 4,
    name = 'ww',
    description = 'descriptionw',
    sizes = (45,48,50),
    price = 1200,
    available = false,
)
const good5 = new Good (
    id = 5,
    name = 'ww',
    description = 'descriptionw',
    sizes = (45,48,50),
    price = 1100,
    available = true,
)
const goodsList = new GoodsList (
    goods = [good1,good2,good3],
    filter = 'ww',
    sortPrice = false,
    sortDir = true
)
good2.setAvailable(true)
goodsList.add(good4)
goodsList.remove(1)
console.log(good1)
console.log(good2)
console.log('get list',goodsList.list)
const basketGood1 = new BasketGood(1,'qqq','description',(45,48,50),10090,true,10)
const basketGood2 = new BasketGood(2,'ww','descriptionw',(45,48,50),1000,false,5)
const basket = new Basket([basketGood1])
console.log(basketGood1)
console.log(basketGood2)
console.log(basket)
console.log('Кол-во:',basket.totalAmount)
console.log('Сумма:',basket.totalSum)
basket.add(basketGood1,5)
basket.add(basketGood2,10)
console.log(basket)
basket.remove(basketGood1,5)
basket.remove(basketGood2,5)
console.log(basket)
console.log(basket.removeUnavailable())
basket.clear()
console.log('Очистка',basket)