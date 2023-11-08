document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.querySelector('.inicio');
    const tireDuvidas = document.querySelector('.tire-duvidas');
    const sobre = document.querySelector('.sobre');

    inicio.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Início" aqui
        console.log('Clicou em Início');
    });

    tireDuvidas.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Tire suas dúvidas" aqui
        console.log('Clicou em Tire suas dúvidas');
    });

    sobre.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Sobre" aqui
        console.log('Clicou em Sobre');
    });

    const chatbox = document.getElementById('chatbox');
    const userMessageInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-button');
    const messageHistory = [];

    sendButton.addEventListener('click', function () {
        const userMessage = userMessageInput.value;
        if (userMessage.trim() !== '') {
            // Adicione a mensagem do usuário à janela de chat
            appendUserMessage(userMessage);

            // Adicione a mensagem do usuário ao histórico de conversa
            messageHistory.push({ role: 'user', content: userMessage });

            // Chame a API do ChatGPT para obter a resposta do chatbot
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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',
                },
                body: JSON.stringify({
                    messages: messageHistory,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    const botResponse = data.choices[0].message.content;
                    // Adicione a resposta do chatbot à janela de chat
                    appendBotMessage(botResponse);

                    // Adicione a resposta do chatbot ao histórico de conversa
                    messageHistory.push({ role: 'assistant', content: botResponse });
                })
                .catch((error) => {
                    console.error('Erro ao chamar a API do ChatGPT:', error);
                });

            // Limpe a entrada do usuário
            userMessageInput.value = '';
        }
    });

    function appendUserMessage(message) {
        const userMessageElement = createMessageElement('user', message);
        chatbox.appendChild(userMessageElement);
    }

    function appendBotMessage(message) {
        const botMessageElement = createMessageElement('bot', message);
        chatbox.appendChild(botMessageElement);
    }

    function createMessageElement(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message ' + sender;
        messageElement.textContent = message;
        return messageElement;
    }
});
