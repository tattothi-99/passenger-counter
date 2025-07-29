
let count = 0
let countEl = document.getElementById("count-el")
let savedata = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")  

console.log(saveEl)
console.log(countEl)

function increment() {
    // console.log("The button was clicked")
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}