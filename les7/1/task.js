const item = document.querySelector('.dropdown')
const items = document.querySelectorAll('.dropdown__item')
console.log(items)
item.onclick = () => {
       if (document.querySelector('.dropdown__list').className=='dropdown__list') {
        document.querySelector('.dropdown__list').className = 'dropdown__list dropdown__list_active'}
    else {
        document.querySelector('.dropdown__list').className = 'dropdown__list' 
    } 
    return false
}
for (i=0; i<items.length; i++) {
    items[i].onclick=(e)=>{
        console.log(document.querySelector('.dropdown__value').textContent = e.srcElement.textContent)
    }}


