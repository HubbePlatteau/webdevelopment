const setup = () => {


    let event = new Date();
    let huidigJaar = new Date();
    let verjaardag = new Date(huidigJaar.getFullYear() + 1, 0, 10);


    console.log("vandaag " + (event.getDate() + "-" + (event.getMonth() + 1) + "-"
        + event.getFullYear()));

    let verschil = (verjaardag - event);
    let math = Math.ceil((((verschil / 1000) / 60) / 60) / 24);

    console.log(math);

}
window.addEventListener("load", setup);