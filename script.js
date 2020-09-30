let quim = document.querySelector("#Mff_mika")
let chris = document.querySelector("#MFF_chrisu")
let mu = document.querySelector("#MFF_M")
let yoki = document.querySelector("#MFF_yoki")

quim.addEventListener("mouseover", mikaOver);
quim.addEventListener("mouseout", mikaOut);

chris.addEventListener("mouseover", chrisOver);
chris.addEventListener("mouseout", chrisOut);

mu.addEventListener("mouseover", muOver);
mu.addEventListener("mouseout", muOut);

yoki.addEventListener("mouseover", yokiOver);
yoki.addEventListener("mouseout", yokiOut);

function mikaOver() {
	quim.src = "mika_peace.jpg"
}
function mikaOut() {
	quim.src = "mika.jpg"

}
function chrisOver() {
	chris.src = "chrisu_peace.jpg"
}
function chrisOut() {
	chris.src = "chrisu.jpg"
}

function muOver() {
	mu.src = "M_peace.jpg"
}
function muOut() {
	mu.src = "M.jpg"
}

function yokiOver() {
	yoki.src = "yoki_peace.jpg"
}
function yokiOut() {
	yoki.src = "yoki.jpg"

}