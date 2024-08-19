document.addEventListener("DOMContentLoaded", function() {
    // Add initial bot message when page loads
    setTimeout(() => {
        addMessage("Hello! I'm here to help with your symptoms. Please type your symptoms or questions below.", "bot");
    }, 500); // Delay to ensure the chat box is ready
});

document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        addMessage(userInput, "user");
        getBotResponse(userInput);
        document.getElementById("user-input").value = ""; // Clear input field
    }
});

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function typeEffect(element, text, callback) {
    let index = 0;
    const speed = 50; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

function getBotResponse(userText) {
    const greetings = ["hi", "hello", "hello bot"];
    const thankYouResponses = ["thank you", "thanks", "thanku", "thank u", "thxz", "thankyou", "well done","wel done" ];
    const responses = {
        "high temperature": "High temperature or fever, can be due to infections or heat exhaustion. Consult a healthcare provider if it persists or is severe.",
        "fever": "You might have a fever. Stay hydrated, rest, and monitor your temperature. If it persists or is very high, consult a healthcare provider.",
        "headache": "A headache can be caused by stress, dehydration, or eye strain. Drink water, rest, and consider over-the-counter pain relief if needed. Consult a doctor if severe or persistent.",
        "cough": "A cough could be from a cold or allergies. Drink warm fluids, avoid irritants, and consider over-the-counter remedies. See a doctor if it continues or worsens.",
        "stomach ache": "Stomach pain might be due to indigestion or gas. Eat bland foods, stay hydrated, and rest. Seek medical attention if the pain is severe or persistent.",
        "chest pain": "Chest pain can be serious. If it’s severe or accompanied by other symptoms like shortness of breath, seek immediate medical help.",
        "breathing trouble": "Difficulty breathing can be serious. Try to stay calm and seek emergency medical care if it’s sudden or severe.",
        "nausea": "Nausea can be caused by various factors. Drink clear fluids and rest. If it persists, consult a healthcare provider.",
        "dizziness": "Feeling dizzy could be due to dehydration or low blood pressure. Sit or lie down and drink water. See a doctor if dizziness is frequent or severe.",
        "fatigue": "Feeling tired can be due to lack of sleep or stress. Ensure you get enough rest and manage stress. Consult a healthcare provider if fatigue is severe or prolonged.",
        "sore throat": "A sore throat may be due to a cold or infection. Drink warm fluids and gargle with salt water. See a doctor if symptoms persist or worsen.",
        "muscle pain": "Muscle pain could be from overuse or strain. Rest, apply heat or cold, and consider over-the-counter pain relief. Consult a healthcare provider if severe or persistent.",
        "runny nose": "A runny nose is often caused by a cold or allergies. Stay hydrated, use saline nasal sprays, and rest. See a doctor if symptoms persist or are severe.",
        "vomiting": "Vomiting can be due to a virus, food poisoning, or other causes. Stay hydrated and rest. Seek medical attention if vomiting is severe or persistent.",
        "rash": "A rash might be caused by an allergy or infection. Avoid scratching, and consider over-the-counter treatments. Consult a doctor if the rash is severe or spreading.",
        "swelling": "Swelling could be due to an injury or fluid retention. Elevate the affected area and apply ice. Seek medical advice if swelling is severe or persistent."
    };

    userText = userText.toLowerCase();
    
    let botResponse;
    
    if (greetings.includes(userText)) {
        botResponse = "Hello! I'm here to help with your symptoms. Please type your symptoms or questions below.";
    } else if (thankYouResponses.includes(userText)) {
        botResponse = "Glad you liked it! If you need any more help, Feel free to ask me.";
    } else {
        botResponse = userText in responses ? responses[userText] : "I'm not sure about that symptom. It's important to consult a healthcare provider for accurate advice.";
    }

    // Create a div for the bot's response
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "bot");
    messageDiv.textContent = ""; // Empty initial content

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    // Use typeEffect to simulate typing
    typeEffect(messageDiv, botResponse);
}