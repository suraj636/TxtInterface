 /*Function to handle translation feedback
        /*function handleFeedback(feedback) {
            //document.getElementById("feedbackDiv").style.display = "none";
            if (feedback === "right") {
                document.getElementById("smileyDiv").style.visibility = "visible";
                document.getElementById("wrongFeedback").style.visibility = "hidden";
            } else {
                document.getElementById("smileyDiv").style.visibility = "hidden";
                document.getElementById("wrongFeedback").style.visibility = "visible";
            }
        

        // Function to submit correction
        function submitCorrection() {
            var correctedSentence = document.getElementById('correctionInput').value.trim();
            if (correctedSentence) {
                // Log the corrected sentence
                console.log('Corrected Sentence:', correctedSentence);
                // Display thank you message
                document.getElementById('wrongFeedback').style.display = 'none';
                document.getElementById('thankYouDiv').style.display = 'block';
            } else {
                alert('Please enter corrections.');
            }
        }*/

        // Function to translate text
        function translateText() {
    var userText = document.getElementById('userText').value;
    var selectedLanguage = document.getElementById('languageDropdown').value;

    var formData = new FormData();
    formData.append('text', userText);
    formData.append('language', selectedLanguage);

    fetch('http://127.0.0.1:8000/translate/', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var translatedTextElement = document.getElementById('translatedText');
        //var feedbackButtonsElement = document.getElementById('feedbackDiv');
        if (translatedTextElement) 
        {
            translatedTextElement.innerText = data.translated_text;
            //if (feedbackButtonsElement) {
                //feedbackButtonsElement.style.visibility = 'visible';
            //} else {
              //  console.error('FeedbackButtons element not found');
            //}
        }
        else 
        {
            console.error('TranslatedText element not found');
        }

        
      /*
        const sentence = data.translated_text;;
        const sentenceElement = document.querySelector(".sentence");
        const rightBtn = document.getElementById("rightBtn");
        const wrongBtn = document.getElementById("wrongBtn");
        const wordButtonsContainer = document.querySelector(".word-buttons");
        //const messageElement = document.querySelector(".message");
        //const submitBtn = document.getElementById("submitBtn");
        //const correctionInput = document.getElementById("correctionInput");
        const words = sentence.split(" ");
        let selectedWords = [];

    rightBtn.addEventListener("click", () => {
      //messageElement.textContent = "";
      //wordButtonsContainer.innerHTML = "";
      //submitBtn.style.display = "none";
      //correctionInput.style.display = "none";
      ///const smileyElement = document.createElement("div");
      //smileyElement.classList.add("smiley");
      //smileyElement.textContent = "😊";
      //wordButtonsContainer.appendChild(smileyElement);

            document.getElementById("smileyDiv").style.visibility = "visible";
            document.getElementById("wrongFeedback").style.visibility = "hidden";
    });

    wrongBtn.addEventListener("click", () => {

     document.getElementById("smileyDiv").style.visibility = "hidden";
     document.getElementById("wrongFeedback").style.visibility = "visible";
     // messageElement.textContent = "Which part you find wrong?";
      wordButtonsContainer.innerHTML = "";
      //submitBtn.style.display = "block";
      //correctionInput.style.display = "block";
      selectedWords = [];
      words.forEach((word) => {
        const wordButton = document.createElement("button");
        wordButton.textContent = word;
        wordButton.addEventListener("click", () => {
          wordButton.classList.toggle("selected");
          if (wordButton.classList.contains("selected")) {
            selectedWords.push(word);
          } else {
            selectedWords = selectedWords.filter(w => w !== word);
          }
          console.log("Selected words:", selectedWords);
        });
        wordButtonsContainer.appendChild(wordButton);
      });
    });

   submitBtn.addEventListener("click", () => {
      const correctedSentence = correctionInput.value.trim();
      if (correctedSentence) {
        console.log("Submitted words:", selectedWords);
        console.log("Corrected sentence:", correctedSentence);
        // Add your code here to handle the submitted words and corrected sentence
      } else {
        alert("Please enter the correct sentence.");
      }
    });*/
        
    })
    .catch(error => {
        console.error('There was an error!', error);
        var translatedTextElement = document.getElementById('translatedText');
        if (translatedTextElement) {
            translatedTextElement.innerText = 'Translation Error: ' + error.message;
        } else {
            console.error('TranslatedText element not found');
        }
    });
}


        // Event listener to hide feedback options when refreshing the page
        window.addEventListener('beforeunload', function(event) {
            // Hide all feedback options
            document.getElementById('feedbackDiv').style.display = 'none';
            document.getElementById('smileyDiv').style.display = 'none';
            document.getElementById('wrongFeedback').style.display = 'none';
            document.getElementById('thankYouDiv').style.display = 'none';
        });













        /*


    const sentence = "मुझे आपका खून पीना है";
    const sentenceElement = document.querySelector(".sentence");
    const rightBtn = document.getElementById("rightBtn");
    const wrongBtn = document.getElementById("wrongBtn");
    const wordButtonsContainer = document.querySelector(".word-buttons");
    const messageElement = document.querySelector(".message");
    const submitBtn = document.getElementById("submitBtn");
    const correctionInput = document.getElementById("correctionInput");
    const words = sentence.split(" ");
    let selectedWords = [];

    rightBtn.addEventListener("click", () => {
      messageElement.textContent = "";
      wordButtonsContainer.innerHTML = "";
      submitBtn.style.display = "none";
      correctionInput.style.display = "none";
      const smileyElement = document.createElement("div");
      smileyElement.classList.add("smiley");
      smileyElement.textContent = "😊";
      wordButtonsContainer.appendChild(smileyElement);
    });

    wrongBtn.addEventListener("click", () => {
      messageElement.textContent = "Which part you find wrong?";
      wordButtonsContainer.innerHTML = "";
      submitBtn.style.display = "block";
      correctionInput.style.display = "block";
      selectedWords = [];
      words.forEach((word) => {
        const wordButton = document.createElement("button");
        wordButton.textContent = word;
        wordButton.addEventListener("click", () => {
          wordButton.classList.toggle("selected");
          if (wordButton.classList.contains("selected")) {
            selectedWords.push(word);
          } else {
            selectedWords = selectedWords.filter(w => w !== word);
          }
          console.log("Selected words:", selectedWords);
        });
        wordButtonsContainer.appendChild(wordButton);
      });
    });

    submitBtn.addEventListener("click", () => {
      const correctedSentence = correctionInput.value.trim();
      if (correctedSentence) {
        console.log("Submitted words:", selectedWords);
        console.log("Corrected sentence:", correctedSentence);
        // Add your code here to handle the submitted words and corrected sentence
      } else {
        alert("Please enter the correct sentence.");
      }
    });
  </script>



        */