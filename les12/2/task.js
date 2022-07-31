const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__close')
function setCookie(name,value) {
    document.cookie = name+'='+encodeURIComponent(value)
}
function getCookie(name) {
    const cookieList = document.cookie.split('; ')
    const cookie = cookieList.find(p=>p.startsWith(name+'='))
    return cookie.substring(name.length+1)
}
console.log(getCookie('popup_view'))
if (getCookie('popup_view')==0 || getCookie('popup_view')==null) {
    modal.classList.add('modal_active')
}
close.onclick = () => {
    modal.classList.remove('modal_active')
    // localStorage.setItem('popup_view',false)
    setCookie('popup_view',1)
    console.log(document.cookie)
}