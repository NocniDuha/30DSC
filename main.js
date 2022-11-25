//karta den 1//
var clickD1 = document.getElementById("d1");
var moreD1 = document.getElementById("moreD1");
var card1 = document.getElementById("card1");

function day1 () {
if (moreD1.style.display === "none") {
    moreD1.style.display = "inline";
    clickD1.innerHTML = "Schovat";
  } else {
    moreD1.style.display = "none";
    clickD1.innerHTML = "Ukázat";
  }
}

function outD1 () {moreD1.style.display = "none"; clickD1.innerHTML = "Ukázat";}

clickD1.addEventListener("click", day1, false);
card1.addEventListener("mouseleave", outD1, false);

//karta den 2//
var clickD2 = document.getElementById("d2");
var moreD2 = document.getElementById("moreD2");
var card2 = document.getElementById("card2");

function day2 () {
if (moreD2.style.display === "none") {
    moreD2.style.display = "inline";
    clickD1.innerHTML = "Schovat";
  } else {
    moreD2.style.display = "none";
    clickD2.innerHTML = "Ukázat";
  }
}

function outD2 () {moreD2.style.display = "none"; clickD2.innerHTML = "Ukázat";}

clickD2.addEventListener("click", day2, false);
card2.addEventListener("mouseleave", outD2, false);

// Karta den 3//
