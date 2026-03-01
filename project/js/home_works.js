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

let position = 0

function moveRight(){
    const maxPosition = parentBlock.clientWidth - childBlock.clientWidth

    if (position < maxPosition){
        position += 2
        childBlock.style.left = position + "px"

        requestAnimationFrame(moveRight)
    }
}
moveRight()