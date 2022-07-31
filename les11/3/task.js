const progress = document.getElementById( 'progress' );
document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const file = document.getElementById('file').files[0]
    upload(file)})
function upload(file) {
    let xhr = new XMLHttpRequest();
    // отслеживаем процесс отправки
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
      console.log(`Отправлено ${event.loaded} из ${event.total}`);
    };
  
    // Ждём завершения: неважно, успешного или нет
    xhr.onloadend = function() {
        console.log(xhr.status)
      if (xhr.status == 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };
  
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(file);
  }