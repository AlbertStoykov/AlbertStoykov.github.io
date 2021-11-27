let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPcChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function wordConvert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, pcChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `Your ${wordConvert(userChoice)} wins over PC's ${wordConvert(pcChoice)} . You Win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, pcChoice) {
    const userChoice_div = document.getElementById(userChoice);
    pcScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `Your ${wordConvert(userChoice)} loses to PC's ${wordConvert(pcChoice)} . You Lose!`; 
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, pcChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Your ${wordConvert(userChoice)} equals PC's ${wordConvert(pcChoice)} . It's a draw..`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const pcChoice = getPcChoice();
    switch(userChoice + pcChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, pcChoice);
            break;
        
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, pcChoice);
            break;
        
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, pcChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();
