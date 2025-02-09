// Predefined questions and answers
const qaPairs = [
    { question: "What is your name?", answer: "my name is Nazeer how i can help you." },
    { question: "How are you?", answer: "I'm just a program, so I don't have feelings!" },
    { question: "What can you do?", answer: "I can answer predefined questions." },
    { question: "Who created you?", answer: "You did!" },
    { question: "Where are you from?", answer: "I exist in the digital world!" },
    { question: "Can you learn new things?", answer: "No, I can only respond to predefined questions." },
    { question: "What is the meaning of life?", answer: "That’s a deep question! Some say 42." },
    { question: "Can you tell me a joke?", answer: "Sure! Why don’t programmers like nature? It has too many bugs!" },
    { question: "Do you have emotions?", answer: "No, but I can simulate friendly responses!" },
    { question: "Can you help me with programming?", answer: "I can try! What do you need help with?" },
    { question: "What languages do you understand?", answer: "I understand English and JavaScript!" },
    { question: "Are you smarter than humans?", answer: "No, but I can provide quick and accurate responses!" },
    { question: "What is your favorite color?", answer: "I like all colors equally!" },
    { question: "Can you give me advice?", answer: "I can try! What do you need advice on?" },
    { question: "Do you have a favorite movie?", answer: "I don't watch movies, but I hear AI-themed ones are interesting!" },
    { question: "Can you tell the weather?", answer: "I can't check live weather, but you can ask a weather app!" },
    { question: "Do you dream?", answer: "Nope, I stay awake 24/7!" },
    { question: "Are you human?", answer: "No, I am a chatbot, just a virtual assistant!" },
    { question: "How old are you?", answer: "I was created recently, so I'm always young!" },
    { question: "Can you play games?", answer: "I can't play games, but I can chat with you!" }
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
