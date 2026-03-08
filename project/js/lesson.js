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