var tab = ["red", "blue", "yellow", "green"]

function clic() {
	document.getElementById("image").style.backgroundColor = tab[Math.floor(Math.random()*4)]
}

document.getElementById("bouton").addEventListener("click", clic)