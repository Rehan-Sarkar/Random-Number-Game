let randomNumber ;
let guess = 10 ;
let guessleft = document.querySelector("#guess")
const inputHistory = [];
function start() {
  alert("Are yo ready for fun !!!")
  randomNumber   = getRandomNumber() ;
  getUserInput();
}

function getUserInput() {
  document.querySelector("#submitbtn").addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const input = document.querySelector("#textField").value;
    compair(input , randomNumber) ;
  });
}

function getRandomNumber() { 
  return parseInt((Math.random()*100 )+1) ;
}

function compair(user , random){
  inputHistory.push(user);
  displayinputHistory();
  if(user == random){
    alert("Hurry !!! you won..")
    end();
  }else if( random >= user){
    feedback.innerHTML = "Opps!! Your Guess is Too Short" ;
    guess-- ;
    guessLeft() ;
  }else if(user >= random){
    feedback.innerHTML = "Opps!! Your Guess is Too Long"
    guess-- ;
    guessLeft() ;
  }
}

function guessLeft() {
  guessleft.innerHTML = `Total Guess ${guess}` ;
  if(guess == 0 ){
    end();
  }
}

function displayinputHistory() {
  const displayHistory = document.querySelector("#guesshistory")
  displayHistory.innerHTML = inputHistory.join(" ,") ;
}

function end() {
    guess = 10 ;
    guessleft.innerHTML = `Total Guess ${guess}` ;
    feedback.innerHTML = "Feedback is Display Here..." 
    inputHistory = []
    input = null ;
}

start()
