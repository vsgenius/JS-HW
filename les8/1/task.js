const revealList = document.querySelectorAll('.reveal')
window.addEventListener('scroll', function() {
    for(i=0;i<revealList.length;i++) {
    isVisible(revealList[i])
    }
  });
function isVisible(el) {
    const {top,bottom} = el.getBoundingClientRect()
    if (bottom<0 && top>0){
        el.classList.remove('reveal_active')
        console.log(el.classList)
        console.log(top,bottom)
    }
    else {
        el.classList.add('reveal_active')
    }
    if (bottom>window.innerHeight && top<window.innerHeight) {
        el.classList.remove('reveal_active')
    }
    else {
        el.classList.add('reveal_active')
    }
}