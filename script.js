let cells = document.getElementsByClassName("cell");


function whosTurn(turnMsg) {
    document.getElementById("message-board").innerHTML = turnMsg;
}

function startGame() {
    const p1Name = document.getElementById('player1').value;
    const p2name = document.getElementById('player2').value;
      for (let i = 0; i < cells.length; i++) {
          cells[i].addEventListener('click', function() {
              
          })

      }

}

