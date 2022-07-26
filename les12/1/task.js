const text = document.getElementById('editor')
const btn = document.querySelector('.btn')
if  (localStorage.getItem('text')!=null) {
    text.value =localStorage.getItem('text')
}
text.addEventListener('keypress',() => {
    localStorage.setItem('text',text.value)
})
btn.addEventListener('click',()=> {
    console.log(btn)
    localStorage.setItem('text','')
    text.value =''
})