let currentPlayer = 'X';
var param = modoJogo();
var jogo = 0;
var i = 0;
var jogadas = 0;
var vitoria1 = 0;
var vitoria2 = 0;

function cellClick(cell) {
    i = Math.floor(Math.random() * 8);

    if(param === false){
        if (cell.innerText === '' && !checkWinner()) {
            cell.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        jogadas++;
    }
    if(param === true){
        if (cell.innerText === '' && !checkWinner()) {
            cell.innerText = 'X';   
            if(jogo[i].innerHTML === ""){
                jogo[i].innerHTML = 'O';
            }
            else{
                i = 0;
                while (!(jogo[i].innerHTML === '')){
                    i++;
                }
                jogo[i].innerHTML = 'O';
            }
            jogadas += 2;
        }
    }
    vitoria();
    checkWinner();
}

function cadastrarJogador(x){
    var jogador1 = document.getElementById("player1").value;
    var jogador2 = document.getElementById("player2").value;
    var p1 = document.getElementById("player1");
    var p2 = document.getElementById("player2");

    if(x === 1){
        document.getElementById("nome1").innerHTML = jogador1;
        p1.style.display = 'none';
    }
    if(x === 2 && param === false){
        document.getElementById("nome2").innerHTML = jogador2;
        p2.style.display = 'none';
    }           
}

function modoJogo(y){
    var btn2 = document.getElementById("btn2");
    var sidePanel1 = document.getElementById("side-panel1");
    var sidePanel2 = document.getElementById("side-panel2");
    var gameBoard = document.getElementById("game-board");
    var limpar = document.getElementById("limpar");
    var hub = document.getElementById("hub");

    sidePanel1.style.display = 'block';
    sidePanel2.style.display = 'block';
    gameBoard.style.display = 'grid';
    hub.style.display = 'none';
    limpar.style.display = 'flex'

    if(y === 1){
        param = true
        jogo = document.querySelectorAll(".cell");
        document.getElementById("nome2").innerHTML = "CPU";
        document.getElementById("player2").value = "CPU";
        
        btn2.style.display = 'none';
        jogadas = 0;
        vitoria1 = 0;
        vitoria2 = 0;
        return;
    }
    else{
        if(y === 2){
            param = false;
            jogo = document.querySelectorAll(".cell");
            jogadas = 0;
            vitoria1 = 0;
            vitoria2 = 0;           
            return;
        }
    }
}

function vitoria(){
    if(jogo[0].innerHTML === jogo[1].innerHTML && jogo[1].innerHTML === jogo[2].innerHTML && jogo[2].innerHTML != ''){
        return jogo[0].innerHTML; 
    }
    if(jogo[3].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[5].innerHTML && jogo[5].innerHTML != ''){
        return jogo[3].innerHTML; 
    }
    if(jogo[6].innerHTML === jogo[7].innerHTML && jogo[7].innerHTML === jogo[8].innerHTML && jogo[8].innerHTML != ''){
        return jogo[6].innerHTML; 
    }
    if(jogo[0].innerHTML === jogo[3].innerHTML && jogo[3].innerHTML === jogo[6].innerHTML && jogo[6].innerHTML != ''){
        return jogo[0].innerHTML;
    }
    if(jogo[1].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[7].innerHTML && jogo[7].innerHTML != ''){
        return jogo[1].innerHTML;
    }
    if(jogo[2].innerHTML === jogo[5].innerHTML && jogo[5].innerHTML === jogo[8].innerHTML && jogo[8].innerHTML != ''){
        return jogo[2].innerHTML;
    }
    if(jogo[0].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[8].innerHTML && jogo[8].innerHTML != ''){
        return jogo[0].innerHTML; 
    }
    if(jogo[2].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[6].innerHTML && jogo[6].innerHTML != ''){
        return jogo[2].innerHTML; 
    }
    return null;
}

function checkWinner(){
    if(vitoria() === 'X'){
        alert("Vitória Jogador 1");
        vitoria1++;
        document.getElementById("player1-wins").innerHTML = "Vitórias: " + vitoria1;
        return true;
    }
    else{
        if(vitoria() === 'O'){
            alert("Vitória Jogador 2");
            vitoria2++;
            document.getElementById("player2-wins").innerHTML = "Vitórias: " + vitoria2;
            return true;
        }
        else{
            if(vitoria() === null && jogadas === 9){
                alert("Empate");
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function limpar(){
    jogo[0].innerHTML = '';
    jogo[1].innerHTML = '';
    jogo[2].innerHTML = '';
    jogo[3].innerHTML = '';
    jogo[4].innerHTML = '';
    jogo[5].innerHTML = '';
    jogo[6].innerHTML = '';
    jogo[7].innerHTML = '';
    jogo[8].innerHTML = '';
    jogadas = 0;
    i = 0;
    currentPlayer = 'X';
}

function reset(){
    window.location.reload(true);
}


