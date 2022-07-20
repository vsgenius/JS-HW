const revealList = document.querySelectorAll('.reveal')
window.addEventListener('scroll', function() {
    for(i=0;i<revealList.length;i++) {
    isVisible(revealList[i])
    }
  });
function isVisible(el) {
    const {top,bottom} = el.getBoundingClientRect()
    if (bottom<0){
        el.classList.remove('reveal_active')
    }
    if (top>window.innerHeight) {
        el.classList.remove('reveal_active')
    }
    el.classList.add('reveal_active')
}