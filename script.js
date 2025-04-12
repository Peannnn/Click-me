function askQuestion() {
    document.getElementById('confessionText').innerText = "Can I please be your boyfriend?";
    document.getElementById('askButton').style.display = 'none';
    document.getElementById('answerButtons').style.display = 'block';
  }
  
  function handleAnswer(answer) {
    const responseText = document.getElementById('responseText');
    if (answer === 'Yes') {
      responseText.innerText = "Now let me see the smile that made me fall for you";
    } else {
      responseText.innerText = "Are you sure? 🥺";
    }
    responseText.style.display = 'block';
  }
  
