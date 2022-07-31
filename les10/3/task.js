const tooltips = document.querySelectorAll('.has-tooltip')
for (let index = 0; index < tooltips.length; index++) {
  tooltips[index].onclick = (e)=>{
    const active = document.querySelector('.tooltip_active')
    if (active != null) {
      if (e.target.nextSibling==active) {
        active.remove()
      }
      else {
      active.remove()
      e.target.insertAdjacentHTML('afterEnd','<div class="tooltip tooltip_active" style="left: '
      +e.target.getBoundingClientRect().left+'px; top: '
      +e.target.getBoundingClientRect().bottom+'px">'
      +e.target.getAttribute('title')+'</div>')
      }
    }
    else {
      e.target.insertAdjacentHTML('afterEnd','<div class="tooltip tooltip_active" style="left: '
      +e.target.getBoundingClientRect().left+'px; top: '
      +e.target.getBoundingClientRect().bottom+'px">'
      +e.target.getAttribute('title')+'</div>')
    }
    return false
  }
}
