function roll() {
   const result = document.getElementById("result");
   const textbox = document.getElementById("textbox");
   const images = document.getElementById("images"); // Get the images container
   const diceNumber = Number(textbox.value);
   let diceRolls = [];

   // Generate dice rolls
   for (let i = 0; i < diceNumber; i++) {
       diceRolls[i] = Math.floor(Math.random() * 6) + 1; // Rolls between 1 and 6
   }

   // Display results
   result.textContent = `You rolled: ${diceRolls.join(", ")}`;
   
   // Display images
   images.innerHTML = ""; // Clear previous images

   for (let j = 0; j < diceRolls.length; j++) { 
       let diceValue = diceRolls[j]; // Get rolled number
       let diceImage = `<img src='images/${diceValue}.png' alt='dice ${diceValue}'>`;
       images.innerHTML += diceImage; // Append images for each dice roll
   }
}
