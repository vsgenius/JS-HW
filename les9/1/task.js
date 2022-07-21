const side = document.querySelector('.chat-widget__side')
const messages = document.querySelector( '.chat-widget__messages' );
const inputChat = document.getElementById('chat-widget__input')
side.onclick = () => {
    const today = new Date
    document.querySelector('.chat-widget').classList.add('chat-widget_active')
    messages.innerHTML += '<div class="message"><div class="message__time">'+today.getHours()+':'+today.getMinutes()+
    '</div> <div class="message__text">Добрый день, рады видеть Вас. Какой у Вас вопрос?</div></div>'
}
inputChat.addEventListener('keypress', (e) => {
    const today = new Date
    if (e.key=='Enter' && inputChat.value!='') {
        messages.innerHTML += '<div class="message message_client"><div class="message__time">'+today.getHours()+':'+today.getMinutes()+
        '</div> <div class="message__text">'+inputChat.value+'</div></div>'
        inputChat.value=''
    }
})
