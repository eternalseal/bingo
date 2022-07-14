/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo (bingoCard, drawnNumbers) {
  let obj = {};
  for (let i=0, len=bingoCard.length; i<len; i++) {
    let row = Math.floor(i/5);
    let col = i % 5;
    // separate all rows and columns in separate arrays
    // checking both null and undefined
    if (obj[`row-${row}`] == null) {
      obj[`row-${row}`] = [];
    }
    if (obj[`col-${col}`] == null) {
      obj[`col-${col}`] = [];
    }
    obj[`row-${row}`].push(bingoCard[i]);
    obj[`col-${col}`].push(bingoCard[i]);

    // separate all diagonals entries in arrays
    if (obj['diag-0'] === undefined) {
      obj['diag-0'] = [];
    }
    if (obj['diag-1'] === undefined) {
      obj['diag-1'] = [];
    }
    if (row === col) {
      obj['diag-0'].push(bingoCard[i]);
    }
    if (row + col === 4) {
      obj['diag-1'].push(bingoCard[i]);
    }
  }

  // check if any of the rows, columns, or diagonals have all the values in drawnNumbers
  for (let key in obj) {
    if (obj[key].every(num => num === 'FREE' || drawnNumbers.includes(num))) {
      return true;
    }
  }
  return false;
}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
const bingoResult1 = checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
);
console.log("bingoResult1", bingoResult1)

// this should return false
const bingoResult2 = checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
);
console.log('bingoResult2',bingoResult2);
