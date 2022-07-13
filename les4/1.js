function getPasswordChecker(good=0,password=0) {
    let pass = password
    return function checker(pass) {
        if (pass==good) {
            return true
        }
        else {
            return false
        }
        } 
}
const gpc = getPasswordChecker(good='fafafag')
console.log(gpc(password='fafafag'))