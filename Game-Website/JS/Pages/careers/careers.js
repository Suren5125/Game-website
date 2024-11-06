const button = document.querySelector("#btn")
const sideBar = document.querySelector(".sideBar")
const Close = document.querySelector(".close")


button.onclick = () => {
    sideBar.style.width = '550px'
}

Close.onclick = () => {
    sideBar.style.width = '0px'
}


