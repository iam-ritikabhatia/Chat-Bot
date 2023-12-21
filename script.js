document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value.toLowerCase(); // Convert user input to lowercase for case-insensitive matching
        if (userMessage.trim() !== '') {
            appendMessage('User', userMessage);
            const chatbotResponse = getChatbotResponse(userMessage);
            appendMessage('Chatbot', chatbotResponse);
            userInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender.toLowerCase());
        messageDiv.innerText = `${sender}: ${message}`;
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function getChatbotResponse(userMessage) {
        // Define specific responses for certain user inputs
        switch (userMessage) {
            case 'hello':
                return 'Hello, how are you?';
            case 'fine':
                return 'I am fine, what about you?';
            default:
                return 'I\'m sorry, I don\'t understand. Please ask another question.';
        }
    }
});
