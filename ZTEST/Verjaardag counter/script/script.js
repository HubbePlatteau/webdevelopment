// noinspection DuplicatedCode

const setup = () => {


    let today = new Date();
    const verjaardag = new Date(document.getElementById("birthday").value);


    console.log("vandaag " + (today.getDate() + "-" + (today.getMonth() + 1) + "-"
        + today.getFullYear()));

    const nextBirthday = new Date(today.getFullYear(), verjaardag.getMonth(), verjaardag.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    let verschil = (nextBirthday - today);
    let math = Math.ceil((((verschil / 1000) / 60) / 60) / 24);

    console.log(math);
    document.getElementById("result").innerHTML = `Dagen tot volgende verjaardag: ${math}`;

}
window.addEventListener("load", setup);