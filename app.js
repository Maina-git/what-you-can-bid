const selectA=document.getElementById("btn1");
const selectB=document.getElementById("btn2");
const selectC=document.getElementById("btn3");
const winBox=document.querySelector("#display");
const playAgain=document.querySelector("#btn");
const theme=document.getElementById("theme");
const body=document.querySelector("body");

const array=['AUDI','MERCEDES','BMW','JEEP','LAND CRUSER','PORCSCHE','SUBARU','VOLKS WAGEN'];

selectA.addEventListener("click",()=>{
     
    playAgain.style.display="block";

    const random=Math.floor(Math.random()*array.length);
    winBox.innerText=`WOW YOU GOT ${array[random]}!`;
    winBox.style.display="block";
});

selectB.addEventListener("click",()=>{

    playAgain.style.display="block";

    const random=Math.floor(Math.random()*array.length);
    winBox.innerText=`WOW YOU GOT ${array[random]}!`;
    winBox.style.display="block";
});

selectC.addEventListener("click",()=>{

    playAgain.style.display="block";

    const random=Math.floor(Math.random()*array.length);
    winBox.innerText=`WOW YOU GOT ${array[random]}!`;
    winBox.style.display="block";
});


playAgain.addEventListener("click",()=>{
winBox.style.display="none";
playAgain.style.display="none";
});

theme.addEventListener("click",()=>{

body.style.backgroundColor="white";

});






























