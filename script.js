// Predefined questions and answers
const qaPairs = [
    { question: "What is your name?", answer: "I am a simple chatbot." },
    { question: "How are you?", answer: "I'm just a program, so I don't have feelings!" },
    { question: "What can you do?", answer: "I can answer predefined questions." },
    { question: "Who created you?", answer: "You did!" }
];

// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Display user message
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Find matching response
    let response = "I'm sorry, I don't understand that.";
    for (let pair of qaPairs) {
        if (userInput.toLowerCase() === pair.question.toLowerCase()) {
            response = pair.answer;
            break;
        }
    }

    // Display bot response
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom

    // Clear input field
    document.getElementById("user-input").value = "";
}
