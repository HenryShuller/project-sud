const fs = require("fs");
const text = fs.readFileSync("./puzzles.txt", "utf-8");
const { EOL } = require("os");

function read() {
  let sudoku = text.trim().split(`${EOL}`);

  return sudoku.map((el) => el.split(""));
  // function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}
const result = read();

function solve(result) {
  const puzzle = read()[0];
  const puzzleArray = [];
  for (let i = 9; i < puzzle.length + 1; i += 9) {
    puzzleArray.push(puzzle.slice(i - 9, i));
  }
  return console.table(puzzleArray);
  /**
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

solve();
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
/// uygsdfuygd
