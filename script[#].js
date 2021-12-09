for (let step = 1; step < 5; step++){
  // Increase 0 until it is equal to 4
  let outputstring = "";
  for (let step2 = 1; step2 <= step; step2++){
      // Decrease Step until it is equal #
      outputstring += "#";    }
      console.log(outputstring);
}

for (let step = 3; step > 0; step--){
  // Decrease 5 until it is equal to 1
  let outputstring = "";
  for (let step2 = 1; step2 <= step; step2++){
      // Decrease Step until it is equal #
      outputstring += "#";    }
      console.log(outputstring);
}
  
for (let n = 1; n <= 100; n++) {
     let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }
      let size = 8;

      let board = "";
      
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if ((x + y) % 2 == 0) {
            board += " ";
          } else {
            board += "#";
          }
        }
        board += "\n";
      }
      
      console.log(board);