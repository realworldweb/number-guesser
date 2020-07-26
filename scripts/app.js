/*
GAME Function
- player must guess a number between min and max
- limit on guesses
- show guesses remaining
- notify player of correct answer if lose
- let player choose to play again 
*/

//Game Values
let min = 1,
    max =  10,
	winningNum = getRandomNumber(min,max),
	guessesLeft = 3;
	
	
//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');
	  
	  
	  
	  //Assign UI min and max
	  minNum.textContent = min;
	  maxNum.textContent = max;
	  
	  
	  //play again event listener
	  game.addEventListener('mousedown', function(e){
		  if(e.target.className === 'play-again'){
			  
			  window.location.reload();
			  
		  }
		  
	  });
	  
	  //Listen for Guess
	  guessBtn.addEventListener('click', function(){
		  let guess = parseInt(guessInput.value);
		  
	//validate
	if(isNaN(guess) || guess < min || guess > max){
		
	setMessage(`Please enter a number between ${min} and ${max}`, 'red');
		
	}
	
	//check if won
	if(guess === winningNum){
		
		gameOver(true,`${winningNum} is correct, YOU WIN!`);
		
		
	} else {
		//wrong number
		guessesLeft -=1;
		
		if(guessesLeft === 0){
		//Game over lost
		
		gameOver(false,`Game over, you lost. the winning number was ${winningNum}`);
			
			
		} else {
			
			//remaing lives

		guessInput.style.borderColor = 'red';
		
		guessInput.value = '';
		
		setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
			
			
		}
		
		
		
	}
		  
	  });
	  
	 function gameOver(won, msg){
	  let color;
	  won === true ? color='green' : color='red';
	
		 
		 
		 
		 guessInput.disabled = true;
		
		guessInput.style.borderColor = color;
		
		setMessage(msg, color);
		
		guessBtn.value = 'play again'
		guessBtn.className += 'play-again'
		 
		 
		 
	 }
	 
	 //random correct number
	 function getRandomNumber(min, max){
		 
		return Math.floor(Math.random()*(max-min+1)+min);
		 
	 }
	  
	 function setMessage(msg, color){
		 
		 message.style.color = color
		 message.textContent = msg;
		 
     }