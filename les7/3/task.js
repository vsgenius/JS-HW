const selectTab = document.querySelectorAll('.tab')
const contentList = document.querySelectorAll('.tab__content')
for (i=0; i<selectTab.length;i++) {
selectTab[i].onclick =()=>{
  if (event.path[0].className=='tab') {
    for (j=0; j<selectTab.length;j++){
    if (selectTab[j].className=='tab tab_active') {
      selectTab[j].classList.remove('tab_active')
      contentList[j].classList.remove('tab__content_active')
    }}
    event.path[0].classList.add('tab_active')
    for (j=0; j<selectTab.length;j++){
      if (selectTab[j].className=='tab tab_active') {
        contentList[j].classList.add('tab__content_active')
    }}
  }
}}