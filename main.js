const roulette = [
  { num: "00", color: "green", parity: null },
  { num: "0", color: "green", parity: null },

  { num: "1", color: "red", parity: "odd" },
  { num: "2", color: "black", parity: "even" },
  { num: "3", color: "red", parity: "odd" },
  { num: "4", color: "black", parity: "even" },
  { num: "5", color: "red", parity: "odd" },
  { num: "6", color: "black", parity: "even" },
  { num: "7", color: "red", parity: "odd" },
  { num: "8", color: "black", parity: "even" },
  { num: "9", color: "red", parity: "odd" },
  { num: "10", color: "black", parity: "even" },
  { num: "11", color: "red", parity: "odd" },
  { num: "12", color: "black", parity: "even" },

  { num: "13", color: "red", parity: "odd" },
  { num: "14", color: "black", parity: "even" },
  { num: "15", color: "red", parity: "odd" },
  { num: "16", color: "black", parity: "even" },
  { num: "17", color: "red", parity: "odd" },
  { num: "18", color: "black", parity: "even" },
  { num: "19", color: "red", parity: "odd" },
  { num: "20", color: "black", parity: "even" },
  { num: "21", color: "red", parity: "odd" },
  { num: "22", color: "black", parity: "even" },
  { num: "23", color: "red", parity: "odd" },
  { num: "24", color: "black", parity: "even" },

  { num: "25", color: "red", parity: "odd" },
  { num: "26", color: "black", parity: "even" },
  { num: "27", color: "red", parity: "odd" },
  { num: "28", color: "black", parity: "even" },
  { num: "29", color: "red", parity: "odd" },
  { num: "30", color: "black", parity: "even" },
  { num: "31", color: "red", parity: "odd" },
  { num: "32", color: "black", parity: "even" },
  { num: "33", color: "red", parity: "odd" },
  { num: "34", color: "black", parity: "even" },
  { num: "35", color: "red", parity: "odd" },
  { num: "36", color: "black", parity: "even" }
];


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

function spin() {
    const result = roulette[Math.floor(Math.random() * 38)]
    return result
}

async function play(money) {
    await ask("Press ENTER to Start\n");

    console.log("=".repeat(30));
    console.log("Hello!\nWelcome to Roulette\n\n");

    while (money > 0) {
    let bet;

    while (true) {
      bet = Number(
        await ask(`You have ${money}. How much would you like to bet?\n\n`)
      );

      if (bet > 0 && bet <= money) break;
      console.log("Bet is INVALID\n\n");
    }

    let type;

    while (true) {
      type = (
        await ask(
          "What type of bet would you like to make? [n]umber OR [c]olor\n\n"
        )
      ).toLowerCase();

      if (type === "n" || type === "c") break;
      console.log("Invalid bet type.\n\n");
    }

    const result = spin();

    let win = false;

    if (type === "c") {
      let guess;

      while (true) {
        guess = (
          await ask("Choose a color (red / black): ")
        ).toLowerCase();

        if (guess === "red" || guess === "black") break;
        console.log("Invalid color.");
      }

      if (result.color === guess) {
        win = true;
      }
    } else if (type === "n") {
      let guess;

      while (true) {
        guess = (
          await ask("Choose a number (0-36 or 00): ")
        ).toLowerCase();

        if (
          guess === "00" ||
          (!isNaN(guess) &&
            Number(guess) >= 0 &&
            Number(guess) <= 36)
        ) {
          break;
        }

        console.log("Invalid number.");
      }

      if (result.num === guess) {
        win = true;
      }
    }

    if (win) {
      if (type === "c") {
        money += bet;
        console.log("You won!");
      } else {
        money += bet * 35;
        console.log("You won!");
      }
    } else {
      money -= bet;
      console.log("You lost.");
    }

    console.log("Current money:", money);
  }

  console.log("You have lost all your money.\n");
  rl.close();
}

play(1000)