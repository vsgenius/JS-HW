const req = new XMLHttpRequest()
let loader = document.getElementById('loader')
let item = document.getElementById('items')
req.addEventListener('readystatechange',()=>{
    if (req.readyState==req.DONE){
        loader.classList.remove('loader_active')
        const data = JSON.parse(req.responseText).response.Valute
        console.log(item)
        for (let key in data) {
            console.log(key,data[key].Value);
            item.insertAdjacentHTML('beforeEnd','<div class="item"><div class="item__code">'+key+'</div><div class="item__value">'+data[key].Value+'</div><div class="item__currency">руб.</div></div>')
        }
    }
})
req.open('GET','https://netology-slow-rest.herokuapp.com')
req.send()