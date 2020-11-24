
let resetBtn = document.getElementById('reset-game');
let rgbValue = document.getElementById('rgb-value');
let correctAnswer = 0;

function getRandomNumber(max){
    return Math.floor((Math.random() * max) + 1);
}

function generateFiveColors(){
    let colorArr = [];
    
    for(let i=1; i < 6;i++){
        colorArr.push({"r": getRandomNumber(255), "g": getRandomNumber(255), "b": getRandomNumber(255)});
    }
    
    return colorArr;
}

function pickAnswer(){
    correctAnswer = getRandomNumber(5);
    console.log(correctAnswer)
}

function displayRGBvalue(theColors){
    console.log(theColors)
    rgbValue.innerHTML = 'RGB('+ theColors[correctAnswer-1].r + "," + theColors[correctAnswer-1].g + "," + theColors[correctAnswer-1].b +")"
}

function checkAnswer(guess){
    if(guess == correctAnswer){
        alert('You picked it great job')
    }else{
        let theGuess = guess.toString();
        let theGuessElement = document.getElementById(theGuess)
        theGuessElement.classList.add('wrong-answer');
        theGuessElement.innerHTML = "<h2>X</h2>";
        
    }
    
}

function resetCircles(){
    for(let i = 1; i < 6; i++){
        let currElem = i.toString();
        document.getElementById(currElem).classList.remove('wrong-answer');    
        document.getElementById(currElem).innerHTML = "";  
    }
}

function game(){
    resetCircles();
    let fiveColors = generateFiveColors();
    pickAnswer();
    displayRGBvalue(fiveColors);
    let strI = "";
    for(let i=0; i < fiveColors.length; i++){
        strI = (1 + i).toString();
        document.getElementById(strI).style.backgroundColor = "rgb("+fiveColors[i].r+","+fiveColors[i].g+","+fiveColors[i].b+")";
    }

    
}

resetBtn.addEventListener("click", game);

game();
