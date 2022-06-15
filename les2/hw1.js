// HW1
function simple(n) {
    let listsimple = []
    for (let i=2; i<=n;i++) {
        let s = 0
        for (let j=2; j<=i; j++){
            if (i%j===0){
                s+=1
            }
        }
    if (s <= 1) {
        listsimple.push(i)
        } 
    }
    return listsimple
}
console.time()
console.log(simple(+process.argv[2]))
console.timeEnd()