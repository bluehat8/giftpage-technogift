function getBotResponse(input) {
    //rock paper scissors
    if (input == "skullcandy") {
        return "Scullcandy: $35";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hola") {
        return "¡Hola!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "¡Intenta preguntarnos algo!";
    }
}