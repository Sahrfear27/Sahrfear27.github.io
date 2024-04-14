
// const switchTheme2 = () => {
//     document.body.classList.toggle('dark-theme');
//     document.getElementById('moon').classList.toggle('moon-dark')
// }

// document.getElementById('moon').addEventListener('click', switchTheme2)

const switchTheme1 = () => {
    const checkbox = document.getElementById("flexSwitchCheckDefault");

    if (checkbox.checked == true) {
        document.querySelector("body").style.backgroundColor = "#252734";
        document.querySelector("body").style.color = "white";
        document.getElementById('moon').style.color = "white"
    }
    else {
        document.querySelector("body").style.backgroundColor = "#D5DEEF";
        document.querySelector("body").style.color = "black";
        document.getElementById('moon').style.color = "black"
        document.getElementById("myWork").style.backgroundColor ="red"
    }
}
