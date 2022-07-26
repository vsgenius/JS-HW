const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__close')
if (localStorage.getItem('popup_view')==true || localStorage.getItem('popup_view')==null) {
    modal.classList.add('modal_active')
}
console.log(localStorage.getItem('popup_view'))
close.onclick = () => {
    modal.classList.remove('modal_active')
    localStorage.setItem('popup_view',false)
}