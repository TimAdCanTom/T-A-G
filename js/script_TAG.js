// Transition for HeroBanner Title
window.onload = function() {
    document.getElementById("fadeMeIn").style.opacity = 1;
}

//Hover to change service thumbs on hompage
document.getElementById("hemmingThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("hemmingThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

document.getElementById("alterationsThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("alterationsThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

document.getElementById("repairThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("repairThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

document.getElementById("measureThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("measureThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

document.getElementById("embroideryThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("embroideryThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

document.getElementById("patternThumb").addEventListener("mouseover", function() {
    this.src = "images/"+this.alt+"Hovered.png";
});
document.getElementById("patternThumb").addEventListener("mouseleave", function() {
    this.src = "images/"+this.alt+".png";
});

