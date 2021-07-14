const theNumber = Math.floor(Math.random() * 100);
const input = document.getElementById("input");
const button = document.getElementById("check");
const remaining = document.getElementById("remaining");
const message = document.getElementById("message");
button.onclick = GUESS;

function enterKeyPressed(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 13) {
    if (event.keyCode == 13) {
      console.log("Enter key is pressed");
      if (String(input.value.length) > 2 && Number(input.value) != 100) {
        message.innerText = "Can't Guess More Than 100!";
        input.placeholder = `Last Guess: ${input.value}`;
        input.value = "";
      } else {
        GUESS();
      }
    } 
  }else {
      return false;
      
    }
}
function GUESS() {
  if (String(input.value.length) > 2 && Number(input.value) != 100) {
    message.innerText = "Can't Guess More Than 100!";
  } else {
    if (remaining.innerText == 1) {
      remaining.innerText = Number(remaining.innerText) - 1;

      message.innerHTML = ` <h2 id='message'>Out Of Attempts</h2>   <input type="button" style='cursor:pointer;' value="TRY AGAIN" onclick="document.location.reload(true);">`;
    } else {
      if (Number(input.value) === theNumber) {
        message.innerHTML = ` <h2 id='message'>Congrats! You Found The Number, Wonna Try Again?</h2>   <input type="button" style='cursor:pointer;' value="TRY AGAIN" onclick="document.location.reload(true);">`;
        button.disabled = "disabled";
        input.disabled = "disabled";
        input.style.cursor = "not-allowed";
        button.style.cursor = "not-allowed";
      } else if (Number(input.value) > theNumber) {
        remaining.innerText = Number(remaining.innerText) - 1;
        if (Number(input.value) - 30 > theNumber) {
          message.innerText = "Too High!\nGuess Lower";
        } else {
          message.innerText = "You Close!\nGuess Lower";
        }
      } else if (Number(input.value) < theNumber) {
        remaining.innerText = Number(remaining.innerText) - 1;

        if (Number(input.value) + 30 < theNumber) {
          message.innerText = "Too Low!\nGuess Higher";
        } else {
          message.innerText = "You Close!\nGuess Higher";
        }
      } else {
        remaining.innerText = Number(remaining.innerText) - 1;

        message.innerText = "Something Went Wrong";
      }
    }
    input.placeholder = `Last Guess: ${input.value}`;
    input.value = "";
    return true;
  }
}
