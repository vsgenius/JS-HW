const interests = document.querySelectorAll('.interest__check')
for (i=0; i<interests.length;i++) {
interests[i].addEventListener('change',(e)=>{
    console.log(e)
})
}