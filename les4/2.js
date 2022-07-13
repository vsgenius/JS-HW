function guess (number) {
    const readline = require('readline-sync')
    let i = 0
    while (true) {
        i+=1
        console.log('Попытка:',i,'Введите число:') 
        let numberInput = readline.question('>>')
        if (number==numberInput){
            return console.log('Верно. Кол-во попыток:',i)
        }
        else {
            if (number>numberInput) {
                console.log('Больше') 
            }
            else {
                console.log('Меньше') 
            }
        }
    }

}
setTimeout(() => {
    guess(5)
},2000);