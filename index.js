let resetEl = document.getElementById("reset-el")
let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let count1 = 0
function increment11() {
    count1 += 1
    countEl1.textContent = count1 
}
count1 = 0
function increment12() {
    count1 += 2
    countEl1.textContent = count1 
}
count1 = 0
function increment13() {
    count1 += 3
    countEl1.textContent = count1 
}
let count2 = 0
function increment21() {
    count2 += 1
    countEl2.textContent = count2
}
count2 = 0
function increment22() {
    count2 += 2
    countEl2.textContent = count2 
}
count2 = 0
function increment23() {
    count2 += 3
    countEl2.textContent = count2 
}
function reset() {
    countEl1.textContent = 0
    countEl2.textContent = 0
    count1 = 0
    count2 = 0
} 