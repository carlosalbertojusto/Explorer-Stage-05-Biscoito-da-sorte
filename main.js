const pageOne = document.querySelector(".page1")
const luckScreen = document.querySelector(".luckScreen")
const pageTwo = document.querySelector(".page2")
const readLuckScreen = document.querySelector(".readLuckScreen")
const biscuitImage = document.querySelector(".img")
const btnReadAnother = document.querySelector("#btnReadAnother")

function handleReset() {
  toggleHide()
}

function handleReadLuck() {
  toggleHide()
  pageOne.classList.add("hide")
  luckScreen.classList.add("hide")
}

function toggleHide() {
  pageOne.classList.toggle("hide")
  luckScreen.classList.toggle("hide")
  pageTwo.classList.toggle("hide")
  readLuckScreen.classList.toggle("hide")
}

btnReadAnother.addEventListener("click", handleReset)
biscuitImage.addEventListener("click", handleReadLuck)
