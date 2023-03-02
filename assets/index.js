// A user can enter a number
// The system picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
// The user can play the game as long as they want to

const inputNumber = () => {
    return new Promise((resolve, reject) => {
        // user input from 1 to 6
      const userInput = Number(window.prompt("Here you go ! Enter a number (1 - 6):"));
    //   random number 
      const random = Math.floor(Math.random() * 6 + 1); 
  
      if (isNaN(userInput)) {
        reject(alert("please enter a number!"));
      }
  
      if (userInput === random) { 
        // return 2 points If the userinput number and the random number are same
        resolve({
          points: 2,
          randomNumber,
        });
      } 
      else if ( userInput === random - 1 ||userInput === random + 1 ) { 
        //  return 1 point If the userinput number is different than the random number by 1
        resolve({
          points: 1,
          random,
        });
      } else {

         // return 0 points
        resolve({
          points: 0,
          random,
        });
      }
    });
  };
  
  const continueGame = () => {
    return new Promise((resolve) => {
      if (window.confirm("Do you wish to continue?")) { 
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  
  const playGame = async () => {
    try {
      const result = await inputNumber();
  
      alert(`Random Number: ${result.random} and your points is : ${result.points} `);
  
      const isplaying = await continueGame();
  
      if (isplaying) {
        playGame();
      } else {
        alert("End of the Game!");
      }
    } catch (error) { 
      alert(error);
    }
  };
  
  playGame();