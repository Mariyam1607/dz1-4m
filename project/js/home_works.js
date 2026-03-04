// gmail validate

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /[\w\W]+@gmail\.com$/;

gmailButton.onclick = () =>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerText = "ОК!"
        gmailResult.style.color = "yellow"
    } else {
        gmailResult.innerText = "NO, ERROR!"
        gmailResult.style.color = "red"
    }
}

// move block

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

let posX = 0
let posY = 0
let direction = "right"


const maxWidth = parentBlock.clientWidth - childBlock.offsetWidth
const maxHeight = parentBlock.clientHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (direction === "right") {
        if (posX < maxWidth){
            posX ++
    } else {
            direction = "bottom"
        }
    }
    if (direction === "bottom") {
        if (posY < maxHeight){
            posY ++
        } else {
            direction = "left"
        }
    }
    else if (direction === "left") {
        if (posX > 0) {
            posX --
        } else {
            direction = "top"
        }
    }
    else if (direction === "top") {
        if (posY > 0) {
            posY --
        } else {
            direction = "right"
        }
    }
    childBlock.style.left = posX + "px"
    childBlock.style.top = posY + "px"

    requestAnimationFrame(moveBlock)
}
moveBlock()


// childBlock.style.left = `${posX}px` //`${position}px`
// requestAnimationFrame(moveBlock)
// }else if (posX >= maxWidth && posY < maxHeight){
//     posY ++
//     childBlock.style.top = `${posY}px`
// }


// STOPWATCH //

const seconds = document.querySelector("#seconds")
const btnStart= document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")

let count = 0
let interval = null

btnStart.addEventListener("click", () => {
    if (interval !== null) return;
    interval = setInterval(() => {
        count ++
        seconds.textContent = count
    }, 1500)
})
btnStop.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
})
btnReset.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
    count = 0
    seconds.textContent = count
})