const textBox = document.getElementById("myTextBox");
const terminal = document.getElementById("terminal");
const clearButton = document.getElementById("clearButton");
const cutButton = document.getElementById("cutButton");
const revertButton = document.getElementById("revertButton");

let commandHistory = [];
let cutHistory = [];

function printToTerminal(text) {
    const para = document.createElement("p");
    para.innerText = text;
    terminal.appendChild(para);
}

function clearTerminal() {
    terminal.innerHTML = "";
}

function addCommandToHistory(command) {
    commandHistory.push(command);
}

function cutLastCommand() {
    const lastCommand = commandHistory[commandHistory.length - 1];
    const commandArray = lastCommand.split("");
    const commandWithSpaces = commandArray.join(" ");
    cutHistory.push(lastCommand);
    printToTerminal(commandWithSpaces);
}

function revertLastCut() {
    const lastCut = cutHistory.pop();
    if (lastCut) {
        printToTerminal(lastCut);
        textBox.value = lastCut;
        addCommandToHistory(lastCut);
    }
}

textBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const command = textBox.value;
        printToTerminal(command);
        addCommandToHistory(command);
        textBox.value = "";
    }
});

clearButton.addEventListener("click", function () {
    clearTerminal();
});

cutButton.addEventListener("click", function () {
    cutLastCommand();
});

revertButton.addEventListener("click", function () {
    revertLastCut();
});