// const modal_success = document.getElementById('modal_success')
// document.getElementById('modal_main').className = 'modal modal_active'
// const successElement = document.getElementsByClassName('show-success')[0]
// successElement.onclick = () => {
//     modal_success.className = 'modal modal_active'}
// const modal_main = document.getElementById('modal_main')
// const closeElement = document.getElementsByClassName('modal__close_times')[0]
// closeElement.onclick = () => {
//     console.log('asdda')
//     modal_main.className = 'modal'
// }
document.getElementById('modal_main').className = 'modal modal_active'
const btns = document.querySelectorAll('.btn')
const modal__close = document.querySelectorAll('.modal__close_times')
for (var i = 0, len = btns.length; i < len; i++) (function(i){
    btns[i].onclick = function() {
        if (btns[i].closest('.modal').id=='modal_main') {
            btns[i].closest('.modal').className=='modal'
            document.getElementById('modal_success').className = 'modal modal_active'
        }
        else {
            btns[i].closest('.modal').className=='modal modal_active' 
            document.getElementById('modal_success').className = 'modal '
        }
        return false
}})(i)
for (var j = 0, len = modal__close.length; j < len; j++) (function(j){
    modal__close[j].onclick = function() {
    if (document.getElementById('modal_main').className != 'modal') {
    document.getElementById('modal_main').className = 'modal'
    document.getElementById('modal_success').className = 'modal'}
    else {
        document.getElementById('modal_main').className = 'modal'
    document.getElementById('modal_success').className = 'modal'
    }
    return false
}})(j)
