function askQuestion() {
    document.getElementById('confessionText').innerText = "Can I please be your boyfriend?";
    document.getElementById('askButton').style.display = 'none';
    document.getElementById('answerButtons').style.display = 'block';
  }
  
  function handleAnswer(answer) {
    const responseText = document.getElementById('responseText');
    if (answer === 'Yes') {
      responseText.innerText = "Show me that beautiful face, please?";
    } else {
      responseText.innerText = "I hope one day you change your mind....";
    }
    responseText.style.display = 'block';
  }
  
