let fontSize = document.querySelectorAll('.font-size')
let colorText = document.querySelector('.book__control_color').querySelectorAll('a')
let colorTitle = document.querySelector('.book__control_background').querySelectorAll('a')
for (var i = 0, len = fontSize.length; i < len; i++)
  {
  fontSize[i].onclick = (e) =>{
    if (Array.from(e.srcElement.classList).indexOf('font-size_active')==-1) {
      document.querySelector('.font-size_active').classList.remove('font-size_active')
      e.srcElement.classList.add('font-size_active')
      if (e.srcElement.getAttribute('data-size') == 'small') {
        document.getElementById('book').classList.add('book_fs-small')
      }
      else {
        if (e.srcElement.getAttribute('data-size') == 'big') {
          document.getElementById('book').className = 'book book_fs-big'
      } 
      else {
        document.getElementById('book').className='book'
      }
    }
  return false;
  }}
};
for (var i = 0, len = colorText.length; i < len; i++)
  {
    colorText[i].onclick = (e) =>{
    if (Array.from(e.srcElement.classList).indexOf('color_active')==-1) {
      document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active')
      e.srcElement.classList.add('color_active')
      if (e.srcElement.getAttribute('data-text-color') == 'black') {
        document.getElementById('book').classList.add('book_color-black')
        document.getElementById('book').classList.remove('book_color-gray')
        document.getElementById('book').classList.remove('book_color-whitesmoke')
      }
      else {
        if (e.srcElement.getAttribute('data-text-color') == 'gray') {
          document.getElementById('book').classList.remove('book_color-black')
          document.getElementById('book').classList.add('book_color-gray')
          document.getElementById('book').classList.remove('book_color-whitesmoke')
      } 
      else {
        document.getElementById('book').classList.remove('book_color-black')
        document.getElementById('book').classList.remove('book_color-gray')
        document.getElementById('book').classList.add('book_color-whitesmoke')
      }
    }
  return false;
  }}
   };
for (var i = 0, len = colorTitle.length; i < len; i++)
  {
    colorTitle[i].onclick = (e) =>{
      console.log(document.querySelector('.book__control_background').querySelector('.color_active').classList)
    if (Array.from(e.srcElement.classList).indexOf('color_active')==-1) {
      document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active')
      e.srcElement.classList.add('color_active')
      if (e.srcElement.getAttribute('data-bg-color') == 'black') {
        document.getElementById('book').classList.add('bg_color_black')
        document.getElementById('book').classList.remove('bg_color_gray')
        document.getElementById('book').classList.remove('bg_color_white')
        console.log(document.getElementById('book'))
      }
      else {
        if (e.srcElement.getAttribute('data-bg-color') == 'gray') {
          document.getElementById('book').classList.remove('bg_color_black')
          document.getElementById('book').classList.add('bg_color_gray')
          document.getElementById('book').classList.remove ('bg_color_white')
          console.log(document.getElementById('book'))
      } 
      else {
        document.getElementById('book').classList.remove('bg_color_black')
        document.getElementById('book').classList.remove('bg_color_gray')
        document.getElementById('book').classList.add = ('bg_color_white')
        console.log(document.getElementById('book'))
      }
    }
    return false;
    }}
   };
