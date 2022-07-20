const item = document.querySelector('.dropdown')
const items = document.querySelectorAll('.dropdown__item')
const eventClickMenu = function() {
    if (document.querySelector('.dropdown__list').className=='dropdown__list') {
        document.querySelector('.dropdown__list').className = 'dropdown__list dropdown__list_active'}
    else {
        document.querySelector('.dropdown__list').className = 'dropdown__list' 
    }
}
const eventClickMenuItem = () => {
    document.querySelector('.dropdown__value').innerText = event.target.textContext
}
for (i=0, len=items.length; i<len; i++) (function (i){
    items[i].addEventListener('click',eventClickMenuItem)
})(i)
item.addEventListener('click',eventClickMenu)


