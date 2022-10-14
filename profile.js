
let myFavColor = document.querySelector('#color')
let myFavPlace = document.querySelector('#place')
let myFavRit = document.querySelector('#ritual')

function color() {
    alert('Blue')
}
function place() {
    alert('Sea World of Orlando, FL')
}
function rit() {
    alert('Anytime I go to Florida, I have to go to Publix and have a freshly made sub sandwich')
}

myFavColor.addEventListener('click', color)
myFavPlace.addEventListener('click', place)
myFavRit.addEventListener('click', rit)