getHole = index => document.getElementById(`hole${index}`)
function checkClass (className){
    if (className == 'hole hole_has-mole') {
        document.getElementById(`dead`).textContent = Number(document.getElementById(`dead`).textContent)+1
        if (document.getElementById(`dead`).textContent>=5) {
            alert('Выиграли!')
            document.getElementById(`dead`).textContent=0
            document.getElementById(`lost`).textContent=0
        }
    }
    else {
        document.getElementById(`lost`).textContent = Number(document.getElementById(`lost`).textContent)+1
        if (document.getElementById(`lost`).textContent>=5) {
            alert('Проиграли!')
            document.getElementById(`dead`).textContent=0
            document.getElementById(`lost`).textContent=0
        }
    }
}
getHole(1).onclick = () => {
    checkClass(getHole(1).className)
} 
getHole(2).onclick = () => {
    checkClass(getHole(2).className)
} 
getHole(3).onclick = () => {
    checkClass(getHole(3).className)
} 
getHole(4).onclick = () => {
    checkClass(getHole(4).className)
} 
getHole(5).onclick = () => {
    checkClass(getHole(5).className)
} 
getHole(6).onclick = () => {
    checkClass(getHole(6).className)
} 
getHole(7).onclick = () => {
    checkClass(getHole(7).className)
} 
getHole(8).onclick = () => {
    checkClass(getHole(8).className)
} 
getHole(9).onclick = () => {
    checkClass(getHole(9).className)
} 

