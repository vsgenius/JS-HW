const interests = document.querySelectorAll('.interest__check')
for (i=0; i<interests.length;i++) {
// console.log(interests[i])
interests[i].addEventListener('change',(e)=>{
    if (e.target.parentElement.nextElementSibling!=null) {
        // console.log(e.target.closest('.interest').children[1].querySelectorAll('.interest'))
        const listCheckbox = e.target.closest('.interest').children[1].querySelectorAll('input')
        for (let index = 0; index < listCheckbox.length; index++) {
            if (e.target.checked==true) {
            listCheckbox[index].checked=true}
            else {
                listCheckbox[index].checked=false
            }
        }
    }
    // nextElementSibling
})
}