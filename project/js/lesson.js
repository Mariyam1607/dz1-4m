// PHONE NUMBER VALIDATE

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [25796]\d{2} \d{2}-\d{2}-\d{2}/

phoneButton.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerText = "OK, GOOD!"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerText = "NO, ERROR!"
        phoneResult.style.color = "red"
    }
}