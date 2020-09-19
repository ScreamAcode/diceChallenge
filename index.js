var randomNumber1 = Math.floor(Math.random()*6)+1;

var imageSource1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

// simple changes in above 3 lines to make dice 2 to rotate.

var randomNumber2 = Math.floor(Math.random()*6)+1;

var imageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

// to change the heading
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won";
}else{
    document.querySelector("h1").innerHTML ="Match draw !";
}