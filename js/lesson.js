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

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabContentItemsParent = document.querySelector(".tab_content_items")

let curIndex = 0


const hideTabContent = ()=> {
    tabContentBlocks.forEach(tabBlock => {
        tabBlock.style.display = "none"
    })
    tabContentItems.forEach(tabItem => {
        tabItem.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = "block"
    tabContentItems[i].classList.add("tab_content_item_active")
}


hideTabContent()
showTabContent()

tabContentItemsParent.onmousemove = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
const autoTabSlider = () => {
    curIndex++

    if (curIndex >= tabContentBlocks.length) {
        curIndex = 0
    }

    hideTabContent()
    showTabContent(curIndex)
}

setInterval(autoTabSlider, 3000)

// CONVERTER

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const  data = JSON.parse(request.response)

            if (element.id === "som") {
                targetElement1.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.eur).toFixed(2)

            }
            if (element.id === "usd") {
                targetElement1.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2)
            }

            if (element.id === "eur") {
                targetElement1.value = (element.value * data.eur).toFixed(2)
                targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(2)
            }
            if (!element.value) { somInput.value = usdInput.value = eurInput.value = "" }

        }
    }
}
converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)