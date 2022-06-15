let n = Math.round(Math.random()*1000)
while(true) {
console.log('Загадано',n)
let guess = prompt('Введите число от 0 до 999')
if (guess === 'q') {
    break;
}
if (guess == n) {
    alert('Угадали')
} else {
    if (guess > n){
    alert('Не угадали. Меньше')
} else {alert('Не угадали. Больше')}
}
}