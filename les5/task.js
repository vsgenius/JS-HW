getHole = (index) => document.getElementById(`hole${index}`);
const n = document.getElementsByClassName("hole").length;
// console.log(document.querySelectorAll('.hole-game div')[0].id)
for (i = 1; i < n; i++)
  (function (i) {
    getHole(i).onclick = () => {
      checkClass(getHole(i).className);
      return false;
    };
  })(i);
function checkWinLose(text) {
  alert(text);
  document.getElementById(`dead`).textContent = 0;
  document.getElementById(`lost`).textContent = 0;
}
function checkClass(className) {
  console.log(className);
  if (className == "hole hole_has-mole") {
    document.getElementById(`dead`).textContent =
      Number(document.getElementById(`dead`).textContent) + 1;
    if (document.getElementById("dead").textContent >= 5) {
      checkWinLose("Выиграли");
    }
  } else {
    document.getElementById(`lost`).textContent =
      Number(document.getElementById(`lost`).textContent) + 1;
    if (document.getElementById("lost").textContent >= 5) {
      checkWinLose("Проиграли");
    }
  }
}
