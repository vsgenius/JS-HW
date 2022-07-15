const items = document.querySelectorAll('.menu__link')
const menu_sub = document.querySelectorAll('.menu_sub')
for (var i = 0, len = items.length; i < len; i++) (function(i){
    items[i].onclick = function() {
        if (items[i].href=='http://127.0.0.1:5500/les6/2/task.html') {
            if (items[i].nextElementSibling.className == 'menu menu_sub'){ 
            items[i].nextElementSibling.className = 'menu menu_sub menu_active'
        }
            else {
            items[i].nextElementSibling.className = 'menu menu_sub'   
            }
            }
            return false
        }})(i)
