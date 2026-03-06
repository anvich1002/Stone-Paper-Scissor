let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");



const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Tie!";
    msg.style.backgroundColor = "#607d8b";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#244625";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose! Your ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#9c5e59";
    }
};

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

if (userChoice === computerChoice) {
    drawGame();
}
else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = computerChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
        userWin = computerChoice === "scissors" ? false : true;
    }
    else {
        userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});