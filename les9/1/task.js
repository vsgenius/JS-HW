const side = document.querySelector('.chat-widget__side')
const messages = document.querySelector( '.chat-widget__messages' );
const inputChat = document.getElementById('chat-widget__input')
const botMessages = ['Кто тут?','Где ваша совесть?','Вы не купили ни одного товара для того, чтобы с нами так разговаривать?', 'Мы ничего не будем вам продавать!']
side.onclick = () => {
    const today = new Date
    document.querySelector('.chat-widget').classList.add('chat-widget_active')
    messages.innerHTML += '<div class="message"><div class="message__time">'+today.getHours()+':'+today.getMinutes()+
    '</div> <div class="message__text">Добрый день, рады видеть Вас. Какой у Вас вопрос?</div></div>'
}
inputChat.addEventListener('keypress', (e) => {
    const today = new Date
    const i = Math.floor(Math.random() *botMessages.length)
    console.log(i)
    if (e.key=='Enter' && inputChat.value!='') {
        messages.innerHTML += '<div class="message message_client"><div class="message__time">'+today.getHours()+':'+today.getMinutes()+
        '</div> <div class="message__text">'+inputChat.value+'</div></div>'
        inputChat.value=''
        messages.innerHTML += '<div class="message"><div class="message__time">'+today.getHours()+':'+today.getMinutes()+
        '</div> <div class="message__text">'+botMessages[i]+'</div></div>'
    }
})
