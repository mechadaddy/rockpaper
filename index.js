$(".figure-img").click(function (e) { 
    var userChoice = this.id;
    setTimeout(() => {
        playGame(userChoice);
    }, 500);
    animate(userChoice);
});

function playGame(userChoice) {
    var randomNum = Math.floor(Math.random()*3)+1;
    if (randomNum === 1) {
        var gameChoice = "rock";
        animate("rock");
    } else if (randomNum === 2) {
        var gameChoice = "paper";
        animate("paper")
    } else if (randomNum === 3) {
        var gameChoice = "scissors";
        animate("scissors")
    } else {
        console.log("Whoops game chooser broke");
    }

    if (userChoice === "rock") {
        $(".rock-cap").text("You chose");

        switch (userChoice === "rock") {

            case gameChoice === "rock":
                setTimeout(() => {
                    $("#paper, #scissors, .paper-cap, .scissors-cap").fadeOut(100).addClass("hidden");
                    $(".rock-cap").text("tie");
                    $("h1").text("It's a tie");
                    resetGame();
                }, 500);
                break;

            case gameChoice === "paper":
                setTimeout(() => {
                    $("#scissors, .scissors-cap").fadeOut(100).addClass("hidden");
                    $(".paper-cap").text("Game Chose")
                    $("#rock").addClass("loser");
                    $("h1").text(`Game chose ${gameChoice}, you lose`);
                    resetGame();
                }, 500);
                break;

            case gameChoice === "scissors":
                setTimeout(() => {
                    $("#paper, .paper-cap").fadeOut(100).addClass("hidden");
                    $("h1").text(`Game chose ${gameChoice}, you win`);
                    $(".scissors-cap").text("Game Chose");
                    $("#scissors").addClass("loser");
                    resetGame();
                }, 500);
                break;
        
            default: console.log(" rock Switch Statment Broke")
                break;
        }

    } else if (userChoice === "paper") {

        $(".paper-cap").text("you chose");

        switch (userChoice === "paper") {
            case gameChoice === "rock":
                setTimeout(() => {
                    $("#scissors, .scissors-cap").fadeOut(100).addClass("hidden");
                    $("h1").text(`Game chose ${gameChoice}, you win`);
                    $("#rock").addClass("loser");
                    $(".rock-cap").text("game chose");
                    resetGame();
                }, 500);
                break;

            case gameChoice === "paper":
                setTimeout(() => {
                    $("#rock, #scissors, .rock-cap, .scissors-cap").fadeOut(100).addClass("hidden");
                    $("h1").text("It's a tie");
                    $(".paper-cap").text("tie");
                    resetGame();
                }, 500);
                break;

            case gameChoice === "scissors":
                setTimeout(() => {
                    $("#rock, .rock-cap").fadeOut(100).addClass("hidden");
                    $("h1").text(`Game chose ${gameChoice}, you lose`);
                    $("#paper").addClass("loser");
                    $(".scissors-cap").text("game chose")
                    resetGame();
                }, 500);
                break;
        
            default: console.log("paper Switch Statment Broke")
                break;
        }

    } else if (userChoice === "scissors") {
        $(".scissors-cap").text("you chose");

        switch (userChoice === "scissors") {
            case gameChoice === "rock":
                setTimeout(() => {
                    $("#paper, .paper-cap").fadeOut(100).addClass("hidden");
                    $("h1").text(`Game chose ${gameChoice}, you lose`);
                    $("#scissors").addClass("loser");
                    $(".rock-cap").text("game chose");
                    resetGame();
                }, 500);
                break;

            case gameChoice === "paper":
                setTimeout(() => {
                    $("#rock, .rock-cap").fadeOut(100).addClass("hidden");
                    $("h1").text(`Game chose ${gameChoice}, you win`);
                    $("#paper").addClass("loser");
                    $(".paper-cap").text("game chose");
                    resetGame();
                }, 500);
                break;

            case gameChoice === "scissors":
                setTimeout(() => {
                    $("#rock, #paper, .rock-cap, .paper-cap").fadeOut(100).addClass("hidden");
                    $("h1").text("It's a tie");
                    $(".scissors-cap").text("tie");
                    resetGame();
                }, 500);
                break;
        
            default: console.log(" Scissors Switch Statment Broke")
                break;
        }

    } else {
        console.log("What on earth did you do?")
    }
}

function animate(event) {
    $("#"+event).fadeOut(100).fadeIn(100);
}


function resetGame() {
    setTimeout(() => {
        $("h1").text("Hedge your Bet");
        $("#rock, #paper, #scissors, .rock-cap, .paper-cap, .scissors-cap").fadeIn(100).removeClass("hidden").removeClass("loser");
        $(".rock-cap").text("Chose Rock");
        $(".paper-cap").text("Choose Paper");
        $(".scissors-cap").text("Choose Scissors");
    }, 1500);
}

