function guess (number) {
    const readline = require('readline-sync')
    let i = 0
    while (true) {
        i+=1
        console.log('Попытка:',i,'Введите число:') 
        let numberInput = readline.question('>>')
        if (number==numberInput){
            return 'Верно. Кол-во попыток:'+i
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
const g = guess(5)
Promise.all([g])
.then((data)=> {
    console.log(data)
})
.catch ((err)=> {
    console.log(err)
})