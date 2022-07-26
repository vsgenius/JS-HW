const req = new XMLHttpRequest()
const title = document.querySelector('.poll__title')
const pollAnswers = document.getElementById('poll__answers')
req.addEventListener('readystatechange',()=>{
    if (req.readyState==req.DONE){
        const data = JSON.parse(req.responseText)['data']
        const answers = document.querySelectorAll('.poll__answer')
        if (answers != null) {
            for (let index = 0; index < answers.length; index++) {
                answers[index].remove()
            }
        }
        title.textContent = data.title
        for (let index = 0; index < data.answers.length; index++){
            pollAnswers.insertAdjacentHTML('beforeEnd','<button class="poll__answer">'+data.answers[index]+'</button>')
        }
        const buttons = document.querySelectorAll('button')
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].addEventListener('click',(e) => {
                req.open('GET','https://netology-slow-rest.herokuapp.com/poll.php')
                req.send()
            })
        }  
    }
})
req.open('GET','https://netology-slow-rest.herokuapp.com/poll.php')
req.send()