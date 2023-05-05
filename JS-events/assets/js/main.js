function functionLondon() {
    const london = document.getElementById("london");
    london.style.display = "block";
    paris.style.display = "none";
    tokyo.style.display = "none";
}

function functionParis() {
    const paris = document.getElementById("paris");
    london.style.display = "none";
    paris.style.display = "block";
    tokyo.style.display = "none";
}

function functionTokyo() {
    const tokyo = document.getElementById("tokyo");
    london.style.display = "none";
    paris.style.display = "none";
    tokyo.style.display = "block";
}