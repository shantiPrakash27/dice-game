//1st palyer
var randomnumber1=document.getElementsByClassName("player");
randomnumber1=Math.floor(Math.random()*(6-1+1))+1;

var randomimage="dice"+randomnumber1+".png";
console.log(randomimage);
var randomimage1="/images/"+randomimage;
console.log(randomimage1);
var play1=document.querySelectorAll("img")[0];
play1.setAttribute("src",randomimage1);


//player
var randomnumber2=document.getElementsByClassName("player");
randomnumber2=Math.floor(Math.random()*(6-1+1))+1;

var randomimage2="dice"+randomnumber2+".png";
console.log(randomimage2);
var randomimage2="/images/"+randomimage2;
console.log(randomimage2);
var play2=document.querySelectorAll("img")[1];
play2.setAttribute("src",randomimage2);


//wining

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw";
}



  