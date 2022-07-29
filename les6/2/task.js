const items = document.querySelectorAll('.menu__link')
const menu_sub = document.querySelectorAll('.menu_sub')
for (let i = 0, len = items.length; i < len; i++) {
    items[i].onclick = function() {
        if (items[i].nextElementSibling!=null) {
            if (items[i].nextElementSibling.className == 'menu menu_sub'){ 
                items[i].nextElementSibling.className = 'menu menu_sub menu_active'
            }
            else {
                items[i].nextElementSibling.className = 'menu menu_sub'   
            }
        }
        else {
            window.open(items[i].href)
        }
    return false
    }
}
 