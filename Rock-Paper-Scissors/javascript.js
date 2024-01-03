function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);

    if (number == 0)
    {
        return "rock";
    }

    else if(number == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection)
{
    if((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock"))
    {
        return "You lose!";
    }

    else if(playerSelection == computerSelection)
    {
        return "TIE";
    }

    else
    {
        return "You won!";
    }
}