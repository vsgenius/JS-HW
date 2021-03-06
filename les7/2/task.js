class Game {
    constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timerElement = container.querySelector('.status__timer');
      this.reset();
      this.clearInterval
      this.registerEvents();
    }
  
    reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;
    }
  
    registerEvents() {
        document.addEventListener('keypress', () =>{
        if (event.key===this.currentSymbol.textContent) {
            this.success()
        }   
        else {
            this.fail()
        }})
      /*
        TODO:
        Написать обработчик события, который откликается
        на каждый введённый символ.
        В случае правильного ввода слова вызываем this.success()
        При неправильном вводе символа - this.fail();
       */
    }
  
    success() {
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
      if (this.currentSymbol !== null) {
        return;
      }
      if (++this.winsElement.textContent === 10) {
        alert('Победа!');
        this.reset();
      }
      this.setNewWord();
    }
  
    fail() {
      if (++this.lossElement.textContent === 5) {
        alert('Вы проиграли!');
        this.reset();
      }
     this.setNewWord();
    }
  
    setNewWord() {
      const word = this.getWord();
      this.initializeClock(word.length)
      this.renderWord(word);
    }
  
    getWord() {
      const words = [
          'bob',
          'awesome',
          'netology',
          'hello',
          'kitty',
          'rock',
          'youtube',
          'popcorn',
          'cinema',
          'love',
          'javascript'
        ],
        index = Math.floor(Math.random() * words.length);
      return words[index];
    }
    initializeClock(endtime) {
        this.timerElement.textContent = endtime
        const refreshid = setInterval(()=> {
            if (Number(this.timerElement.textContent) > 0) {
                this.timerElement.textContent=Number(this.timerElement.textContent)-1;         
            }
            else {
                this.timerElement.textContent = 0;
                this.fail() 
                clearInterval(refreshid)
            }
        }, 1000);
    }
    renderWord(word) {
      const html = [...word]
        .map(
          (s, i) =>
            `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
        )
        .join('');
      this.wordElement.innerHTML = html;
  
      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
  }
  new Game(document.getElementById('game'))