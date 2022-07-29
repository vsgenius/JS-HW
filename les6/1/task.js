document.getElementById('modal_main').className = 'modal modal_active'
let modalMain = document.getElementById('modal_main')
let modalSuccess= document.getElementById('modal_success')
const btns = document.querySelectorAll('.btn')
const modalClose = document.querySelectorAll('.modal__close_times')
for (let i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = function() {
        if (btns[i].closest('.modal').id=='modal_main') {
            modalSuccess.className = 'modal modal_active'
            modalMain.className = 'modal'
        }
        else {
            modalSuccess.className  = 'modal'
            modalMain.className  = 'modal modal_active'
        }
        return false
}
}
for (let j = 0, len = modalClose.length; j < len; j++) {
    modalClose[j].onclick = function() {
    if (modalMain.className  != 'modal') {
        modalMain.className  = 'modal'
        modalSuccess.className  = 'modal'}
    else {
        modalMain.className  = 'modal'
        modalSuccess.className  = 'modal'
    }
    return false
}
}
