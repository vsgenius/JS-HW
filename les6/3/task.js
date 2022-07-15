const items = document.querySelectorAll('.slider__arrow')
const images = document.querySelectorAll('.slider__item')
const sliders = document.querySelectorAll('.slider__dot')
for (var i = 0, len = items.length; i < len; i++) (function(i){
    items[i].onclick = function() {
        if (items[i].className=='slider__arrow slider__arrow_next'){
                for (j=0, len=images.length; j<len;j++) {
                    if (images[j].className=='slider__item slider__item_active') {
                        images[j].className='slider__item';
                        if (j+1<len) {                        
                            images[j+1].className='slider__item slider__item_active';}
                        else {
                            images[0].className='slider__item slider__item_active';
                        }
                        break
                    }
                }}
        else {
            for (j=0, len=images.length; j<len;j++) {
                if (images[j].className=='slider__item slider__item_active') {
                    images[j].className='slider__item'
                    if (j-1>0) {                        
                        images[j-1].className='slider__item slider__item_active';}
                    else {
                        images[len-1].className='slider__item slider__item_active';
                    }
                    break
                }
            }
        }
            return false
        }})(i)
for (var i = 0, len = items.length; i < len; i++) (function(i){
    items[i].onclick = function() {
        if (items[i].className=='slider__arrow slider__arrow_next'){
                for (j=0, len=images.length; j<len;j++) {
                    if (images[j].className=='slider__item slider__item_active') {
                        images[j].className='slider__item';
                        if (j+1<len) {                        
                            images[j+1].className='slider__item slider__item_active';}
                        else {
                            images[0].className='slider__item slider__item_active';
                        }
                        break
                    }
                }}
        else {
            for (j=0, len=images.length; j<len;j++) {
                if (images[j].className=='slider__item slider__item_active') {
                    images[j].className='slider__item'
                    if (j-1>0) {                        
                        images[j-1].className='slider__item slider__item_active';}
                    else {
                        images[len-1].className='slider__item slider__item_active';
                    }
                    break
                }
            }
        }
            return false
        }})(i)
        for (var i = 0, len = items.length; i < len; i++) (function(i){
            items[i].onclick = function() {
                if (items[i].className=='slider__arrow slider__arrow_next'){
                        for (j=0, len=images.length; j<len;j++) {
                            if (images[j].className=='slider__item slider__item_active') {
                                images[j].className='slider__item';
                                if (j+1<len) {                        
                                    images[j+1].className='slider__item slider__item_active';}
                                else {
                                    images[0].className='slider__item slider__item_active';
                                }
                                break
                            }
                        }}
                else {
                    for (j=0, len=images.length; j<len;j++) {
                        if (images[j].className=='slider__item slider__item_active') {
                            images[j].className='slider__item'
                            if (j-1>0) {                        
                                images[j-1].className='slider__item slider__item_active';}
                            else {
                                images[len-1].className='slider__item slider__item_active';
                            }
                            break
                        }
                    }
                }
                    return false
                }})(i)
for (var i = 0, len = sliders.length; i < len; i++) (function(i){
    sliders[i].onclick = function() {
    console.log(i)
    for (j=0, len=images.length; j<len;j++) {
        if (images[j].className=='slider__item slider__item_active') {
            images[j].className='slider__item';
            break
        }
    }
    images[i].className='slider__item slider__item_active'
    return false
}})(i)
