const letters="abcdefgkhilmnojpqrstuvwxyz";
let lettersArray=Array.from(letters);
let lettersContainer=document.querySelector('.latters');

lettersArray.forEach(latter =>{
    let mySpan=document.createElement("span");
    let theLetters=document.createTextNode(latter);
    mySpan.appendChild(theLetters);
    mySpan.className='letter-box';
    lettersContainer.appendChild(mySpan);
});
const words={
    programing:["php","javaScript","scale","js",],
    movies:["prestige",'Inception','parsite','prestige'],
    people:['bayan jarour','bayan jarour','bayan jarour','bayan jarour'],
    countries:['syria','syria','syria','syria']

}
let allKeys=Object.keys(words);
let randomPropNumber=Math.floor(Math.random()* allKeys.length);
let randomPropName=allKeys[randomPropNumber];
let randomPropValue=words[randomPropName];
let randomValueNumber=Math.floor(Math.random()*randomPropValue.length);
let randomValueValue=randomPropValue[randomValueNumber];
document.querySelector(".game-info .category span").innerHTML=randomPropName;
let lettersSuessContainer=document.querySelector(".letters-guses");
let letterAndSpace=Array.from(randomValueValue);
letterAndSpace.forEach(letter =>{
let emptySpan =document.createElement("span");
    if(letter===' '){
        emptySpan.className='width-space';
    }
    lettersSuessContainer.appendChild(emptySpan);
});
let guessSpan=document.querySelectorAll(".letters-guses span");

let States;
let worgAttemets=0;
let trueAttement=0;
let theDraw=document.querySelector('.hangman-draw');
document.addEventListener("click",(e) =>{
     States=false;
    if(e.target.className==='letter-box'){
        e.target.classList.add("clicked");
        let theclickedLetter=e.target.innerHTML.toLowerCase();
        let theChoserWord=Array.from(randomValueValue.toLowerCase());       
        theChoserWord.forEach((wordLetter,WordIndex)=>{
            if(theclickedLetter==wordLetter){
                States=true;
                guessSpan.forEach((span,spanIndex)=>{
                    if(WordIndex===spanIndex){
                        span.innerHTML=theclickedLetter;
                    }
                });
            }
        });
        if(States!=true){
            worgAttemets++;
            theDraw.classList.add(`wrong-${worgAttemets}`);
            document.getElementById('sucsses').play();
            if(worgAttemets===8){
                endGame();
                lettersContainer.classList.add("finished");
            }
        }
        else{
            trueAttement++;
            if(trueAttement==guessSpan.length){
                sucssesGame();
            }
            document.getElementById('fail').play();
        }
    }
});
function endGame(){
    let mydiv=document.createElement("div");
    let divText=document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
    mydiv.appendChild(divText);
    mydiv.className='popoup';
    document.body.appendChild(mydiv);
}
function sucssesGame(){
    let mydiv1=document.createElement("div");
    let divText=document.createTextNode(`Gradiation you are sucsses, The Word Is ${randomValueValue}`);
    mydiv1.appendChild(divText);
    mydiv1.className='popoup';
    document.body.appendChild(mydiv1);
    let myButton=document.createElement("button");
    let buttonText=document.createTextNode('play Agin');
    myButton.appendChild(buttonText);
    mydiv1.appendChild(myButton);
    myButton.className="byttonSuc";
    myButton.onclick = function changeContent() {
        document.body.removeChild(mydiv1);
        allKeys=Object.keys(words);
        randomPropNumber=Math.floor(Math.random()* allKeys.length);
        randomPropName=allKeys[randomPropNumber];
        randomPropValue=words[randomPropName];
        randomValueNumber=Math.floor(Math.random()*randomPropValue.length);
        randomValueValue=randomPropValue[randomValueNumber];
        document.querySelector(".game-info .category span").innerHTML=randomPropName;
        lettersSuessContainer=document.querySelector(".letters-guses");
        let lettersContainer=document.querySelectorAll('.latters span');
        letterAndSpace=Array.from(randomValueValue);
        letterAndSpace.forEach(letter =>{
        emptySpan =document.createElement("span");
            if(letter===' '){
                emptySpan.className='width-space';
            }
            lettersSuessContainer.appendChild(emptySpan);
        });
        guessSpan=document.querySelectorAll(".letters-guses span");
        console.log(guessSpan);
        guessSpan.forEach((span,spanIndex)=>{
                span.innerHTML=" ";
                span.classList.remove("clicked");
        });
        lettersContainer.forEach((span,spanIndex)=>{
            span.classList.remove("clicked");
    });
     }
  
}