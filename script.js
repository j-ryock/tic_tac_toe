let turn;

function letsPlay() {
    const p1 = document.getElementById('player1').value;
    const p2 = document.getElementById('player2').value;
    if (p1 == "" || p2 == ""){
        alert('Enter both players names and press \"Let\'s play!\"'); 

    }else if (turn  === undefined){
        turn = p1;
        document.getElementById('turn').innerText = "Turn: " + turn;
        document.getElementById('letsPlay').style.display = 'none';
        document.getElementById('resetGame').style.display = 'block';
    }
}

// 'Reset game!' and 'Play again!' buttons both run this function
    function newGame() {
    p1 = document.getElementById('player1').value;
    document.getElementById('playAgain').style.display = 'none';
    document.getElementById('resetGame').style.display = 'block';
    tl.innerText = '';
    // document.getElementById('tl').innerText = '';
    document.getElementById('tl').style.cursor = 'auto';
    document.getElementById('tl').style.color = 'white';
    document.getElementById('tm').innerText = '';
    document.getElementById('tm').style.cursor = 'auto';
    document.getElementById('tm').style.color = 'white';
    document.getElementById('tr').innerText = '';
    document.getElementById('tr').style.cursor = 'auto';
    document.getElementById('tr').style.color = 'white';
    document.getElementById('ml').innerText = '';
    document.getElementById('ml').style.cursor = 'auto';
    document.getElementById('ml').style.color = 'white';
    document.getElementById('mm').innerText = '';
    document.getElementById('mm').style.cursor = 'auto';
    document.getElementById('mm').style.color = 'white';
    document.getElementById('mr').innerText = '';
    document.getElementById('mr').style.cursor = 'auto';
    document.getElementById('mr').style.color = 'white';
    document.getElementById('bl').innerText = '';
    document.getElementById('bl').style.cursor = 'auto';
    document.getElementById('bl').style.color = 'white';
    document.getElementById('bm').innerText = '';
    document.getElementById('bm').style.cursor = 'auto';
    document.getElementById('bm').style.color = 'white';
    document.getElementById('br').innerText = '';
    document.getElementById('br').style.cursor = 'auto';
    document.getElementById('br').style.color = 'white';
    document.getElementById('tic-tac-toe').style.pointerEvents = 'auto';
    turn = p1;
    turnTxt.innerText = "Turn: " + turn;
    letsPlay();
}

/*-------------------------------TOP ROW-------------------------------*/
function f_tl() {
    var tl = document.getElementById('tl').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && tl == "") {
        document.getElementById('tl').innerText = 'X';
        document.getElementById('tl').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && tl == "") {
        document.getElementById('tl').innerText = 'O';
        document.getElementById('tl').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (tl !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_tm() {
    var tm = document.getElementById('tm').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && tm == "") {
        document.getElementById('tm').innerText = 'X';
        document.getElementById('tm').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && tm == "") {
        document.getElementById('tm').innerText = 'O';
        document.getElementById('tm').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (tm !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_tr() {
    var tr = document.getElementById('tr').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && tr == "") {
        document.getElementById('tr').innerText = 'X';
        document.getElementById('tr').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && tr == "") {
        document.getElementById('tr').innerText = 'O';
        document.getElementById('tr').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (tr !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

/*-------------------------------MIDDLE ROW-------------------------------*/
function f_ml() {
    var ml = document.getElementById('ml').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && ml == "") {
        document.getElementById('ml').innerText = 'X';
        document.getElementById('ml').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;     
    }else if (turn == p2 && ml == "") {
        document.getElementById('ml').innerText = 'O';
        document.getElementById('ml').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (ml !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_mm() {
    var mm = document.getElementById('mm').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && mm == "") {
        document.getElementById('mm').innerText = 'X';
        document.getElementById('mm').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && mm == "") {
        document.getElementById('mm').innerText = 'O';
        document.getElementById('mm').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (mm !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_mr() {
    var mr = document.getElementById('mr').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && mr == "") {
        document.getElementById('mr').innerText = 'X';
        document.getElementById('mr').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;    
    }else if (turn == p2 && mr == "") {
        document.getElementById('mr').innerText = 'O';
        document.getElementById('mr').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (mr !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

/*-------------------------------BOTTOM ROW-------------------------------*/

function f_bl() {
    var bl = document.getElementById('bl').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && bl == "") {
        document.getElementById('bl').innerText = 'X';
        document.getElementById('bl').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && bl == "") {
        document.getElementById('bl').innerText = 'O';
        document.getElementById('bl').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (bl !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_bm() {
    var bm = document.getElementById('bm').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && bm == "") {
        document.getElementById('bm').innerText = 'X';
        document.getElementById('bm').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && bm == "") {
        document.getElementById('bm').innerText = 'O';
        document.getElementById('bm').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (bm !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

function f_br() {
    var br = document.getElementById('br').innerText;
    p1 = document.getElementById('player1').value;
    p2 = document.getElementById('player2').value;
    if (turn == p1 && br == "") {
        document.getElementById('br').innerText = 'X';
        document.getElementById('br').style.cursor = 'not-allowed';
        turn = p2;
        turnTxt.innerText = "Turn: " + turn;
    }else if (turn == p2 && br == "") {
        document.getElementById('br').innerText = 'O';
        document.getElementById('br').style.cursor = 'not-allowed';
        turn = p1;
        turnTxt.innerText = "Turn: " + turn;
    }else if (br !== ""){
        alert('This square has already been chosen!');
    }else {
    alert('Enter both players names and press \"Let\'s play!\"');
}
}

/*-------------------------------CHECK WINNER-------------------------------*/
function ckWinner() {
p1 = document.getElementById('player1').value;
p2 = document.getElementById('player2').value;
var tl = document.getElementById('tl').innerText;
var tm = document.getElementById('tm').innerText;
var tr = document.getElementById('tr').innerText;
var ml = document.getElementById('ml').innerText;
var mm = document.getElementById('mm').innerText;
var mr = document.getElementById('mr').innerText;
var bl = document.getElementById('bl').innerText;
var bm = document.getElementById('bm').innerText;
var br = document.getElementById('br').innerText;
/*-------------------------------PLAYER 1 WINS-------------------------------*/
    if  (tl == 'X' && tm == 'X' && tr == 'X'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('tm').style.color = 'green';
        document.getElementById('tr').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (ml == 'X' && mm == 'X' && mr == 'X'){
        document.getElementById('ml').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('mr').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (bl == 'X' && bm == 'X' && br == 'X'){
        document.getElementById('bl').style.color = 'green';
        document.getElementById('bm').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tl == 'X' && ml == 'X' && bl == 'X'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('ml').style.color = 'green';
        document.getElementById('bl').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tm == 'X' && mm == 'X' && bm == 'X'){
        document.getElementById('tm').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('bm').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tr == 'X' && mr == 'X' && br == 'X'){
        document.getElementById('tr').style.color = 'green';
        document.getElementById('mr').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tl == 'X' && mm == 'X' && br == 'X'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tr == 'X' && mm == 'X' && bl == 'X'){
        document.getElementById('tr').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('bl').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p1 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
/*-------------------------------PLAYER 2 WINS-------------------------------*/
    }else if (tl == 'O' && tm == 'O' && tr == 'O'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('tm').style.color = 'green';
        document.getElementById('tr').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (ml == 'O' && mm == 'O' && mr == 'O'){
        document.getElementById('ml').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('mr').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (bl == 'O' && bm == 'O' && br == 'O'){
        document.getElementById('bl').style.color = 'green';
        document.getElementById('bm').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tl == 'O' && ml == 'O' && bl == 'O'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('ml').style.color = 'green';
        document.getElementById('bl').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tm == 'O' && mm == 'O' && bm == 'O'){
        document.getElementById('tm').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('bm').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tr == 'O' && mr == 'O' && br == 'O'){
        document.getElementById('tr').style.color = 'green';
        document.getElementById('mr').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tl == 'O' && mm == 'O' && br == 'O'){
        document.getElementById('tl').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('br').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tr == 'O' && mm == 'O' && bl == 'O'){
        document.getElementById('tr').style.color = 'green';
        document.getElementById('mm').style.color = 'green';
        document.getElementById('bl').style.color = 'green';
        document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
        turnTxt.innerText = '***** ' + p2 + ' wins! *****';
        document.getElementById('playAgain').style.display = 'block';
        document.getElementById('resetGame').style.display = 'none';
    }else if (tl !== "" && tm !=="" && tr !=="" && ml !== "" && mm !=="" && mr !=="" && bl !== "" && bm !=="" && br !=="") {
    // alert('CATS game!');    
    tl = document.getElementById('tl').style.color = 'red';
    tm = document.getElementById('tm').style.color = 'red';
    tr = document.getElementById('tr').style.color = 'red';
    ml = document.getElementById('ml').style.color = 'red';
    mm = document.getElementById('mm').style.color = 'red';
    mr = document.getElementById('mr').style.color = 'red';
    bl = document.getElementById('bl').style.color = 'red';
    bm = document.getElementById('bm').style.color = 'red';
    br = document.getElementById('br').style.color = 'red';
    document.getElementById('tic-tac-toe').style.pointerEvents = 'none';
    turnTxt.innerText = '***** CATS game! *****';
    }   
}
