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

function game(a)
{
    let playerCounter = 0, ComputerCounter = 0;

    for(let i = 0; i < 5; i++)
    {
        let player = singleRound(a, getComputerChoice());
        
        if(player == "You won!")
        {
            playerCounter++;
        }
        else if(player == "TIE")
        {
            playerCounter = playerCounter + 0;
        }
        else
        {
            ComputerCounter++;
        }
    }

    if (playerCounter > ComputerCounter)
    {
        console.log("player won by " + playerCounter);
    }
    else
    {
        console.log("Computer won by " + ComputerCounter);
    }
}