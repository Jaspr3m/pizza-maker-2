// Interactie ----------
// Pizza knoppen
const thinCrustKnop = document.querySelector("button#thin-crust-button")
const thickCrustKnop = document.querySelector("button#thick-crust-button")
const marinaraKnop = document.querySelector("button#marinara-button")
const chocolateKnop = document.querySelector("button#chocolate-button")
const buffaloKnop = document.querySelector("button#buffalo-button")
const bbqKnop = document.querySelector("button#bbq-button")
const oliveKnop = document.querySelector("button#olive-button")
const anchovisKnop = document.querySelector("button#anchovis-button")
const pepperoniKnop = document.querySelector("button#pepperoni-button")
const pineappleKnop = document.querySelector("button#pineapple-button")

// Healthbar knoppen
const addHealthKnop = document.querySelector("button#addHealth")
const removeHealthKnop = document.querySelector("button#removeHealth")

// Naamgeving methodes
const bevestigNaamKnop = document.querySelector("button#bevestigNaam")

// IMG ----------------
// Img's die van de overview moeten veranderen
let crustImg = document.getElementById("crust-img")
let sauceImg = document.getElementById("sauce-img")
let toppingImg = document.getElementById("topping-img")

// FUNCTIONS ----------
function selecteerThinCrust() {
    crustImg.src = "img/thin-crust.png";
}

function selecteerThickCrust() {
    crustImg.src = "img/thick-crust.png";
}

function selecteerMarinara() {
    sauceImg.src = "img/marinara.png";
}

function selecteerChocolate() {
    sauceImg.src = "img/chocolate.png";
}

function selecteerBuffalo() {
    sauceImg.src = "img/buffalo.png";
}

function selecteerBBQ() {
    sauceImg.src = "img/bbq.png";
}

function selecteerOlive() {
    toppingImg.src = "img/olive.png";
}

function selecteerAnchovis() {
    toppingImg.src = "img/anchovis.png";
}

function selecteerPepperoni() {
    toppingImg.src = "img/pepperoni.png";
}

// Function + theorie vanuit eigen onderzoek [audio afspelen]
function selecteerPineapple() {
    toppingImg.src = "img/pineapple.png";
    let audio = document.querySelector("audio")
    audio.play();
}

// NAAMGEVING
// Via inputveld, verander naam van de pizza en weergeef in H2
let naam = "Pizza"
let h2 = document.getElementById("pizzaStatus")

function veranderNaam() {
    naam = document.getElementById("naamPizza").value
}

// PIZZA HEALTHBAR
// Variabelen aanmaken
let health = 100
let healthBar = document.querySelector("#healthBar")
let lifeIndicator = document.getElementById("pizzaStatus")
let healthChange = document.getElementById("healthChanges")

// Functie die ervoor zorgt dat er health continu afgaat per 300ms
function healthDrain() {
    if (health < 100 && health > 1) { // als health minder dan 100 EN meer dan 1 is
        health = health - 1 // continu -1 aftrekken van health
        healthBar.value = health
        lifeIndicator.innerHTML = naam.toUpperCase() + " LEEFT!!!"
        crustImg.classList.remove("disable") // disable class weghalen 
        sauceImg.classList.remove("disable")
        toppingImg.classList.remove("disable") 

    } else if (health >= 100) { // wanneer het meer dan of gelijk aan 100
        health-- // continu -1 aftrekken van health [andere notatie]
        healthBar.value = health
    
    } else if (health <= 1) { // wanneer health minder dan of gelijk aan 1 is
        health = 1 // health blijft gelijk aan 1
        healthBar.value = health
        lifeIndicator.innerHTML = naam.toUpperCase() + " IS DOOD GEGAAN!! HOE KON JE!?!?!"
        crustImg.classList.add("disable") // disable class toevoegen 
        sauceImg.classList.add("disable")
        toppingImg.classList.add("disable")
    } else {}
}
// voer function healthDrain() elke 300 ms uit
setInterval(healthDrain, 500)

function addHealth() {
    if (health < 100) { // als health onder 100 is
        random = Math.floor(1 + Math.random()*9) // voeg [nummer tussen 1-4] aan health toe
        health = health + random
        healthBar.value = health
        healthChange.innerHTML = random + "+ health"
    } else {}
}

function removeHealth() { 
    if (health < 100) { // als health onder 100 is
        random = Math.ceil(1 + Math.random()*9) // haal [nummer tussen 1-10] aan health eraf
        health = health - random
        healthBar.value = health
        healthChange.innerHTML = random + "- health"
    } else {}
}

// EVENT LISTENERS ---------------
// Deze wachten/luisteren af tot er een "click" event gebeurt
// Vervolgens voert het een function uit

// Pizza knoppen event listeners
thinCrustKnop.addEventListener("click", selecteerThinCrust)
thickCrustKnop.addEventListener("click", selecteerThickCrust)
marinaraKnop.addEventListener("click", selecteerMarinara)
chocolateKnop.addEventListener("click", selecteerChocolate)
buffaloKnop.addEventListener("click", selecteerBuffalo)
bbqKnop.addEventListener("click", selecteerBBQ)
oliveKnop.addEventListener("click", selecteerOlive)
anchovisKnop.addEventListener("click", selecteerAnchovis)
pepperoniKnop.addEventListener("click", selecteerPepperoni)
pineappleKnop.addEventListener("click", selecteerPineapple)

// Progress bar event listener
addHealthKnop.addEventListener("click", addHealth)
removeHealthKnop.addEventListener("click", removeHealth)
bevestigNaamKnop.addEventListener("click", veranderNaam)


let nav = document.getElementbyId("navImg")

function changeImg() {
	if (nav.src == "images/gs-nav-inactive.png") {
        
    }
	nav.src = "images/gs-nav-inactive.png";
}