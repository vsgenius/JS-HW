const rl = require('readline').createInterface(process.stdin,process.stdout)
function guess (number,i=0) {
    i+=1
    console.log('Попытка:',i,) 
    rl.question('Введите число:',(numberInput) => {
            if (number==numberInput){
                rl.close
                return console.log('Верно. Кол-во попыток:',i)
            }
            else {
                if (number>numberInput) {
                    console.log('Больше') 
                }
                else {
                    console.log('Меньше') 
                }
                guess(number,i)
            }})
    }
guess(5)