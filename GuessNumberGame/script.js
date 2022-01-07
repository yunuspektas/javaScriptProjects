let txtGuess    = document.getElementById('txtGuess');
let btnGuess    = document.getElementById('btnGuess');
let alsoGuessedNumbers = document.getElementById('alsoGuessedNumbers');
let result      = document.getElementById('result');
let number = Math.random()*100;
let randomNumber = number.toFixed(0);
console.log(randomNumber);

btnGuess.addEventListener('click', function(){
    if(randomNumber==txtGuess.value) {
        
        result.innerHTML = "Welldone.. You Find the Number.."+"<br>"+  "The number was "+randomNumber;
        btnGuess.disabled = true;
    } else {
        if(randomNumber>txtGuess.value){
            result.innerText = "your number is smaller..";
        } else  result.innerText = "your number is bigger..";
    }
    alsoGuessedNumbers.textContent+=" " + txtGuess.value;

});