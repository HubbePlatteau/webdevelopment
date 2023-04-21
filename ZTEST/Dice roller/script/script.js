const setup = () => {
    document.getElementById("result").innerHTML = ` You rolled: -`;

}

function rollD20() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 20) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD100() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 100) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD12() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 12) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD10() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 10) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD8() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 8) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD6() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 6) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function rollD4() {
    let multiplier = document.getElementById("multiplier");
    let roll = JSON.stringify((Math.floor(Math.random() * 4) + 1) * multiplier);

    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}

function clear() {
    let roll = JSON.stringify("-")
    document.getElementById("result").innerHTML = `You rolled: ${roll}`;

}


window.addEventListener("load", setup);
