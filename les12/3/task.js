const btn =document.getElementById('signin__btn')
// function sendData(data) {
    const req = new XMLHttpRequest()
req.addEventListener('readystatechange',()=>{
    if (req.readyState==req.DONE){
        console.log(req.responseText)
    }
})
req.open('GET','https://netology-slow-rest.herokuapp.com/auth.php',true)
req.setRequestHeader('Content-Type', 'application/json')
req.send(JSON.stringify({'login':'demo','password':'demo'}))

// const formData = new FormData(document.forms.register)
// formData.append('login','demo')
// formData.append('password','demo')