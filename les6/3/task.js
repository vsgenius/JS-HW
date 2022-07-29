const items = document.querySelectorAll(".slider__arrow");
const images = document.querySelectorAll(".slider__item");
const sliders = document.querySelectorAll(".slider__dot");
sliders[0].classList.add('slider__dot_active')
for (let i = 0, len = items.length; i < len; i++) {
    items[i].onclick = function () {
      if (items[i].className == "slider__arrow slider__arrow_next") {
        for (j = 0, len = images.length; j < len; j++) {
          if (images[j].className == "slider__item slider__item_active") {
            images[j].className = "slider__item";
            sliders[j].classList.remove('slider__dot_active')
            if (j + 1 < len) {
              images[j + 1].className = "slider__item slider__item_active";
              sliders[j+1].classList.add('slider__dot_active')
            } else {
              images[0].className = "slider__item slider__item_active";
              sliders[0].classList.add('slider__dot_active')
            }
            break;
          }
        }
      } else {
        for (let j = 0, len = images.length; j < len; j++) {
          if (images[j].className == "slider__item slider__item_active") {
            images[j].className = "slider__item";
            sliders[j].classList.remove('slider__dot_active')
            if (j - 1 >= 0) {
              images[j - 1].className = "slider__item slider__item_active";
              sliders[j-1].classList.add('slider__dot_active')
            } else {
              images[len - 1].className = "slider__item slider__item_active";
              sliders[len-1].classList.add('slider__dot_active')
            }
            break;
          }
        }
      }
      return false;
    };
};
for (let i = 0, len = sliders.length; i < len; i++) {
    sliders[i].onclick = function () {
      for (let j = 0, len = images.length; j < len; j++) {
        if (images[j].className == "slider__item slider__item_active") {
          images[j].className = "slider__item";
          sliders[j].classList.remove('slider__dot_active')
          break;
        }
      }
      images[i].className = "slider__item slider__item_active";
      sliders[i].classList.add('slider__dot_active')
      return false;
    };
};
