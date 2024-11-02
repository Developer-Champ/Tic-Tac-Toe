const cells = document.querySelectorAll('.cell');
let turn = 'X';
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellA = cells[condition[0]].textContent;
    const cellB = cells[condition[1]].textContent;
    const cellC = cells[condition[2]].textContent;

    if (cellA === cellB && cellB === cellC && cellA !== '') {
      return cellA;
    }
  }
  return null;
}

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.dataset.cellIndex);

  if (cell.textContent === '') {
    cell.textContent = turn;
    const winner = checkForWin();
    if (winner) {
      displayMessage(`Winner: ${winner}`);
      cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
    } else {
      turn = turn === 'X' ? 'O' : 'X';
      displayMessage(`Next Player: ${turn}`);
    }
  }
}

function displayMessage(message) {
  const messageElement = document.querySelector('.message');
  messageElement.textContent = message;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
displayMessage('Next Player: X');