const welcome = document.querySelector('.welcome')
if (localStorage.getItem('user_id')!=null) {
    document.querySelector('.signin').classList.remove('signin_active')
    welcome.querySelector('span').textContent = localStorage.getItem('user_id')
    welcome.classList.add('welcome_active')
}
else {
document.getElementById('signin__form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const req = new XMLHttpRequest()
    req.addEventListener('readystatechange',()=>{
        if (req.readyState==req.DONE){
            answer = JSON.parse(req.responseText)
            if (answer['success']==true) {
                document.querySelector('.signin').classList.remove('signin_active')
                welcome.querySelector('span').textContent = answer['user_id']
                localStorage.setItem('user_id',answer['user_id'])
                welcome.classList.add('welcome_active')
            }
            else {
                alert('Неверные логин или пароль!')
            }
        }
    })
    req.open('POST','https://netology-slow-rest.herokuapp.com/auth.php',true)
    const formData = new FormData(document.forms.register)
    formData.append('login','demo')
    formData.append('password','demo')
    req.send(formData)
})}