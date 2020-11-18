
let resetBtn = document.getElementById('reset-game');

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
    return getRandomNumber(5);
}

function game(){
    let fiveColors = generateFiveColors();
    let strI = "";
    for(let i=1; i < fiveColors.length+1; i++){
        strI = i.toString();
        document.getElementById(strI).style.backgroundColor = "rgb("+fiveColors[i].r+","+fiveColors[i].g+","+fiveColors[i].b+")";
    }

    
}

resetBtn.addEventListener("click", game);

game();
