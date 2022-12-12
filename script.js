const startBtnEl = document.querySelector(".startBtn");
let playerScore = 0;
let computerScore = 0;

startBtnEl.addEventListener("click", ()=> {
    startBtnEl.classList.add("hide");
    const playing_areaEl = document.querySelector(".playing_area").classList.remove("hide");
    let headingEl = document.querySelector(".heading").innerText = "Choose an option";
});

//satrt game playing
const startGame = () => {
    const playerBtnEl = document.querySelectorAll(".player_btn");
    const playerHandEl = document.querySelector(".player_hand_area");
    const computerHandEl = document.querySelector(".computer_hand_area");
    const computerBtnEl = document.querySelector(".computer_btn_area");
    const computerOption = ['Rock', 'Paper', 'Scissors'];

    playerBtnEl.forEach(btn => {
        btn.addEventListener("click", function() {

            //Player choice
            const playerImg = playerHandEl.querySelector(".player_img");
            playerImg.style.animation = "shakePlayer 2s ease";

            //computer choice
            const computerIndex = Math.floor(Math.random() * 3);
            const computerAnswer = computerOption[computerIndex];
            const computerImg = computerHandEl.querySelector(".computer_img");
            computerImg.style.animation = "shakeComputer 2s ease";

            setTimeout(() => {
                playerHandEl.innerHTML = `<img src="./assets/${this.innerText}.png" class="player_img">`;
                computerHandEl.innerHTML = `<img src="./assets/${computerAnswer}.png" class="computer_img">`;
                computerBtnEl.innerHTML = `<button type="button" class="${computerAnswer}_btn">${computerAnswer}</button>`;
                getAnswer(this.innerText, computerAnswer);
            }, 2000);
        });
    });
}
startGame();

function getAnswer(playerAnswer, computerAnswer) {
    let headingEl = document.querySelector(".heading");
    const player_scoreEl = document.querySelector(".player_score");
    const computer_scoreEl = document.querySelector(".computer_score");

    //Check for Rock
    if(playerAnswer === "Rock") {
        if(computerAnswer == "Scissors") {
            headingEl.innerText = "Player Wins";
            playerScore++;
            player_scoreEl.innerText = playerScore;
            return;
        } else if (computerAnswer == "Rock") {
            headingEl.innerText = "Draw";
            return;
        }
    }
    if(playerAnswer === "Scissors") {
        if(computerAnswer == "Rock") {
            headingEl.innerText = "Computer Wins";
            computerScore++;
            computer_scoreEl.innerText = computerScore;
            return;
        }
    }

    //Check for Scissors
    if(playerAnswer === "Scissors") {
        if(computerAnswer == "Paper") {
            headingEl.innerText = "Player Wins";
            playerScore++;
            player_scoreEl.innerText = playerScore;
            return;
        } else if (computerAnswer == "Scissors") {
            headingEl.innerText = "Draw";
            return;
        }
    }
    if(playerAnswer === "Paper") {
        if(computerAnswer == "Scissors") {
            headingEl.innerText = "Computer Wins";
            computerScore++;
            computer_scoreEl.innerText = computerScore;
            return;
        }
    }

    //Check for Paper
    if(playerAnswer === "Paper") {
        if(computerAnswer == "Rock") {
            headingEl.innerText = "Player Wins";
            playerScore++;
            player_scoreEl.innerText = playerScore;
            return;
        } else if (computerAnswer == "Paper") {
            headingEl.innerText = "Draw";
            return;
        }
    }
    if(playerAnswer === "Rock") {
        if(computerAnswer == "Paper") {
            headingEl.innerText = "Computer Wins";
            computerScore++;
            computer_scoreEl.innerText = computerScore;
            return;
        }
    }
}