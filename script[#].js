for (let line = "#"; line.length < 5; line += "#")
    console.log(line);
for (let line = "#"; line.length < 10; line -= "#")
    console.log(line);

for (let n = 1; n <= 100; n++) {
     let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }