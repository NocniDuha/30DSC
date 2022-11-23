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
