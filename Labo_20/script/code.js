let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", game);
    changeimg();

};

const game = () => {
    let knop = document.getElementById("knop");
    knop.remove();
    setInterval(changeimg, 2000);

}
const changeimg = () => {
    let image = document.getElementById("image");
    let randie = Math.floor((Math.random() * 4));
    if (randie === 0) {
        document.getElementById("image").src = "images/0.png";
    } else if (randie === 1) {
        document.getElementById("image").src = "images/1.png";
    } else if (randie === 2) {
        document.getElementById("image").src = "images/2.png";
    } else if (randie === 3) {
        document.getElementById("image").src = "images/3.png";
    } else if (randie === 4) {
        document.getElementById("image").src = "images/4.png";
    }
    moveimg();

}

const moveimg = () => {

    let image = document.getElementById("image");
    let playField = document.getElementById("playField");
    let maxLeft = playField.style.width;
    let maxHeight = playField.style.height;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    image.style.left = left + "px";
    image.style.top = top + "px";
}


window.addEventListener("load", setup);


