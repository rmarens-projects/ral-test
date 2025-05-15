window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script85 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script86 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script87 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script88 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script89 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script90 = function()
{
  // Wait until the Web Object iframe is loaded
setTimeout(() => {
  const iframes = document.getElementsByTagName('iframe');
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i].src.includes("rmarens-projects.github.io")) {
      iframes[i].setAttribute("allow", "microphone");
      console.log("Microphone access granted to Web Object iframe.");
    }
  }
}, 1000); // delay to ensure iframe is loaded

}

window.Script91 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script92 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script93 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

window.Script94 = function()
{
  var recognition;
var isRecording = false;

function toggleRecognition() {
  if ('webkitSpeechRecognition' in window) {
    // Initialize recognition if it hasn't been initialized
    if (!recognition) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;  // Stop after first recognition
      recognition.interimResults = false;  // Only final results
      recognition.lang = 'en-US';  // Set language to English

      // When speech is recognized
      recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        
        // Log the recognized text to the console for debugging
        console.log("Recognized Text: " + recognizedText);

        // Update the Storyline variable 'RecognizedText' with the recognized speech
        var player = GetPlayer();
        player.SetVar("RecognizedText", recognizedText);  // Store text in variable
      };

      // Handle errors
      recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
      };
    }

    // Toggle the recognition process
    if (isRecording) {
      recognition.stop();  // Stop the speech recognition when clicked again
      console.log("Speech recognition stopped.");
      isRecording = false;
    } else {
      recognition.start();  // Start speech recognition when clicked
      console.log("Speech recognition started.");
      isRecording = true;
    }
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
}

toggleRecognition();  // Run the function to start speech recognition

}

};
