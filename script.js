function askQuestion() {
    document.getElementById('confessionText').innerText = "Can I please be your boyfriend?";
    document.getElementById('askButton').style.display = 'none';
    document.getElementById('answerButtons').style.display = 'block';
  }
  
  function handleAnswer(answer) {
    const responseText = document.getElementById('responseText');
    if (answer === 'Yes') {
      responseText.innerText = "Send me a pic of u rn";
    } else {
      responseText.innerText = "I hope one day I can....";
    }
    responseText.style.display = 'block';
  }
  