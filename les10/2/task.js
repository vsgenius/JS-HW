const tasks = document.getElementById('tasks__list')
const input = document.getElementById('task__input')
const btn = document.querySelector('.tasks__add')
window.addEventListener('submit', (e) => {
    e.preventDefault()
})
window.addEventListener('keypress', (e) => {
    if (e.key=='Enter'){
        tasks.insertAdjacentHTML('beforeEnd','<div class="task"><div class="task__title">'+input.value+'</div><a href="#" class="task__remove">&times;</a></div>')
    const removeList = document.querySelectorAll('.task__remove')
        for (let index = 0; index < removeList.length; index++) {
            removeList[index].addEventListener('click', (e) => {
            e.target.removeEventListener('click',e.target.parentElement.remove())
        });
    }
    }
})