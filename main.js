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

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

function spin() {
    const result = roulette[Math.floor(Math.random() * 38)]
    console.log(result)
    return result
}

function check_color(num) {
    if (num.color === "red") {
        console.log("red");
    } else if (num.color === "black") {
        console.log("black");
    } else {
        console.log("green")
    }
}

function check_num(result, guess) {
    if (result.num === guess.toLowerCase()) {
        console.log("correct");
    } else {
        console.log("wrong")
    }
}

check_color(spin())

function betAmount(money) {
    rl.question(`You have ${money}. How much would you like to bet?\n`, (betAMT) => {
        if (betAMT > money || betAMT <= 0) {
            console.log("Bet is INVALID")
            betAmount(money);
        } else {
            console.log("TEST")
        }
    })
}

function betType() {
    rl.question(`What type of bet would you like to make? [n]umber OR [c]olor\n`, (betTYPE) => {
        if (betTYPE.toLowerCase() === "n") {
            console.log("TEST")
        } else if (betTYPE.toLowerCase() === "c") {
            console.log("TEST2")
        } else {
            console.log("Invalid bet type.")
            betType()
        };
        rl.close();
    })
}

function play(money) {
        rl.question('Press ENTER to Start', (asda) => {
            rl.write('='.repeat(30) + '\n\n');
            console.log(`Hello! \nWelcome to Roulette`);
            betAmount(money);
            betType()
        });
    if (money === 0) {
        console.log("You have lost all your money.")
        rl.close();
    }
}

play(1000)