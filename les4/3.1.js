const rl = require('readline').createInterface(process.stdin,process.stdout)
function guess (number) {
    return new Promise((res,rej) => {
        rl.question(number, (numberInput) => {
            res(numberInput);
        })
    })
}
function input(number,i=0) {
    i+=1
    console.log('Попытка:',i,) 
    const q = guess('Введите число:')
    q.then((numberInput) => {
        if (number==numberInput){
            rl.close
            console.log('Верно. Кол-во попыток:',i)
        }
        else {
            if (number>numberInput) {
                console.log('Больше') 
            }
            else {
                console.log('Меньше') 
            }
            input(number,i)
        }
    })
}
input(5)
