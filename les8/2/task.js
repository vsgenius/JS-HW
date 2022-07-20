  let i=0
  setInterval(()=> {
      i=i+1
      const rotator=document.getElementsByClassName('rotator__case rotator__case_active')[0]
      if (rotator.parentElement.lastElementChild.className!='rotator__case rotator__case_active') {
        rotator.classList.remove('rotator__case_active')
        rotator.nextElementSibling.classList.add('rotator__case_active')
      }
      else {
        rotator.classList.remove('rotator__case_active')
        rotator.parentElement.firstElementChild.classList.add('rotator__case_active')
      }

  },1000)
