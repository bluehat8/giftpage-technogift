// Collapsible
var coll = document.getElementsByClassName("collapsible");
var coll1 = document.getElementById("chat-button");
var content = document.getElementById('content');
var btnBot = document.getElementById('btnBot');
var chatbar = document.getElementById('chat-bar-collapsible');


coll1.onclick = function() {

    content.style.maxHeight = null;
    chatbar.style.bottom="-60px";

};


for (let i = 0; i < coll.length; i++) {
    btnBot.addEventListener("click", function () {
        this.classList.toggle("active");

        //var content = this.nextElementSibling;

       /* if (content.style.maxHeight) {
            content.style.maxHeight = null;
            chatbar.style.bottom="-60px";
        } else {*/
            content.style.maxHeight = content.scrollHeight + "px";
            chatbar.style.bottom="0px";

        //}

    });

 
}


window.onclick = function (event) {
    if (event.target == chatbar) {
        chatbar.style.visibility = "hidden";

        content.style.maxHeight = null;
        chatbar.style.bottom="-60px";
    }
};

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "¿En qué podemos ayudarte?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});