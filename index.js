let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addhome1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function addhome2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addhome3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function addguest1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function addguest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function addguest3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function restart() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}