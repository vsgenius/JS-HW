const text = document.getElementById('editor')
const btn = document.querySelector('.btn')
    text.value =localStorage.getItem('text')
text.addEventListener('keypress',() => {
    localStorage.setItem('text',text.value)
})
btn.addEventListener('click',()=> {
    localStorage.removeItem('text')
    text.value =null
})