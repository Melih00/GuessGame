const theNumber = Math.floor(Math.random()*100);
const input = document.getElementById('input');
const button = document.getElementById('check');
const remaining = document.getElementById('remaining');
const message = document.getElementById('message');
// message.innerText = 'a \n s';
button.onclick = GUESS

  function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       console.log("Enter key is pressed");
       if (String(input.value.length) > 2 && Number(input.value) != 100){
        message.innerText = 'Can\'t Guess More Than 100!';
     

    }else{GUESS()
 }
    }}


 
 function GUESS(){
     

        if (String(input.value.length) > 2 && Number(input.value) != 100){
         message.innerText = 'Can\'t Guess More Than 100!';
      
 
     }else{
     if (Number(input.value) === theNumber){
 message.innerHTML = ` <h2 id='message'>Congrats! You Found The Number, Wonna Try Again?</h2>   <input type="button" style='cursor:pointer;' value="TRY AGAIN" onclick="document.location.reload(true);">`;
 button.disabled = 'disabled';
 input.disabled = 'disabled';
 input.style.cursor = 'not-allowed';
 button.style.cursor = 'not-allowed';
     }else if (Number(input.value) > theNumber ){
         if (Number(input.value) - 30 >theNumber ){
         message.innerText = 'Too High!\nGuess Lower';
         }else{
             message.innerText = 'You Close!\nGuess Lower';
         }
     }else if (Number(input.value) < theNumber ){
         if (Number(input.value) + 30 <theNumber ){
         message.innerText = 'Too Low!\nGuess Higher';
         }else{
             message.innerText = 'You Close!\nGuess Higher';
         }
     }else{
         message.innerText = 'Something Went Wrong';
 
     }
     
    
 }input.placeholder = `Last Guess: ${input.value}`
     input.value = '';
        return true;
     } 
 