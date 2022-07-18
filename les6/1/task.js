document.getElementById('modal_main').className = 'modal modal_active'
const btns = document.querySelectorAll('.btn')
const modalClose = document.querySelectorAll('.modal__close_times')
for (let i = 0, len = btns.length; i < len; i++) (function(i){
    btns[i].onclick = function() {
        if (btns[i].closest('.modal').id=='modal_main') {
            document.getElementById('modal_success').className = 'modal modal_active'
            document.getElementById('modal_main').className = 'modal'
        }
        else {
            document.getElementById('modal_success').className = 'modal'
            document.getElementById('modal_main').className = 'modal modal_active'
        }
        return false
}})(i)
for (var j = 0, len = modalClose.length; j < len; j++) (function(j){
    modalClose[j].onclick = function() {
    if (document.getElementById('modal_main').className != 'modal') {
    document.getElementById('modal_main').className = 'modal'
    document.getElementById('modal_success').className = 'modal'}
    else {
        document.getElementById('modal_main').className = 'modal'
    document.getElementById('modal_success').className = 'modal'
    }
    return false
}})(j)
