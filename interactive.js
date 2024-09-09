const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    const userInput = input.value.trim();

    if (userInput === "" || !isNaN(userInput)) {
        const errorMessage = "Please enter your name";
        message.style.color = "red";
        animateText(errorMessage);
        return;
    }

    const greetingMessage = `Hello, ${userInput}! Nice to meet you!`;
    message.style.color = "yellow";
    animateText(greetingMessage);
});

function animateText(text) {
    message.innerHTML = "";
    let index = 0;

    function type() {
        if (index < text.length) {
        message.innerHTML += text[index];
        index++;
        setTimeout(type, 10);
        }
    }
    type();
}
