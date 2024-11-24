//to build logic of game
var colors = [     //random color combos
    {
        p1: "#c053a8",
        p2: "#f4ff62"
    },
    {
        p1: "#ff4950",
        p2: "#bdb1ff"
    },
    {
        p1: "#4e002e",
        p2: "#ffbeeb"
    },
    {
        p1: "#f2ff62",
        p2: "#ff4950"
    },
    {
        p1: "#fbe4d1",
        p2: "#70c2a7"
    },
    {
        p1: "#ff67a3",
        p2: "#2000ff"
    },
    {
        p1: "#2F3C7E",
        p2: "#FBEAEB"
    },
    {
        p1: "#F96167",
        p2: "#FCE77D"
    },
    {
        p1: "#CCF381",
        p2: "#4831D4"
    },
    {
        p1: "#E2D1F9",
        p2: "#317773"
    },
    {
        p1: "#990011FF",
        p2: "#FCF6F5FF"
    },
    {
        p1: "#FFFFF",
        p2: "#8AAAE5"
    },
    {
        p1: "#FF69B4",
        p2: "#00FFFF"
    },
    {
        p1: "#FCEDDA",
        p2: "#EE4E34"
    },
    {
        p1: "#89ABE3FF",
        p2: "#EA738DFF"
    },
    {
        p1: "#EC449B",
        p2: "#99F443"
    },
    {
        p1: "#CC313D",
        p2: "#F7C5CC"
    },
    {
        p1: "#AA96DA",
        p2: "#C5FAD5"
    },
    {
        p1: "#FCF6F5FF",
        p2: "#2BAE66FF"
    },
    {
        p1: "#101820FF",
        p2: "#FEE715FF"
    }
];
//some avtars
var avtars = ["Avtars/1.jpg", "Avtars/2.jpg", "Avtars/3.jpg", "Avtars/4.jpg", "Avtars/5.jpg", "Avtars/6.jpg", "Avtars/7.jpg", "Avtars/8.png", "Avtars/9.jpg", "Avtars/10.jpg", "Avtars/11.jpg", "Avtars/12.jpg", "Avtars/13.jpg", "Avtars/14.webp", "Avtars/15.jpg", "Avtars/16.jpg", "Avtars/17.jpg", "Avtars/18.jpg", "Avtars/19.webp", "Avtars/20.webp", "Avtars/21.jpg", "Avtars/22.jpg"];
//some random names to be displayed when players won't enter one
var names = ['Naughty Alien', 'Mr. Crazy', 'Albartross', 'Sasta Chhapri', 'Mighty Mafia', 'Cobra Bite', 'Scary Pumpkin', 'Iron-Cut', 'Skull Crusher', 'Accidental Genius', 'Mrs. Mario', 'Final Fantasy', 'Busted Boy', 'Devil Blade', 'Pokemon', 'Doraemon', 'Pikachu', 'Cherry', 'T-Rex', 'Finger Of Death', 'Criss Cross', 'Disco Thunder', 'Black Mamba', 'Blistered Outlaw', 'Napoleon', 'Mrs. Blonde', 'Mercenary Wolf', 'Apple Bob', 'Crayon Crime', 'James Bomb', 'Xavier', 'Faulty Devil', 'Backbencher', 'Dead Cells', 'Pac-Man', 'Megaleodon', 'Red Butt', 'Nightmare', 'Nerdy Princess', 'Zombie Bolssom', 'Dark Matter', 'Electron', 'Toxic Gecko', 'Gunpowder', 'Iron Heart', 'Sigma Male', 'Sigma Female', 'Baby Brown', 'Bad Bunny', 'Jethalal', 'Candy Butcher', 'Cupid Dust', 'Bad Karma', 'Dirtbag', 'Dexter'];

function randomItem(lst) {      //to return random index within range of entered array
    var randint = Math.floor(Math.random() * lst.length);
    return randint;
}

var rc = randomItem(colors);       //some random colors
document.querySelector("body").style.backgroundImage = `url('bg.jpg')`;    //random wallpapers
//all boxes
var box1 = document.querySelector("div.box1");
var box2 = document.querySelector("div.box2");
var box3 = document.querySelector("div.box3");
var avtarO = box1.querySelector("div#avPO");
var avtarX = box1.querySelector("div#avPX");
var avtarIconO = box1.querySelector("div.POBOX");
var avtarIconX = box1.querySelector("div.PXBOX");
var inp1 = box1.querySelector("input#p1");
var inp2 = box1.querySelector("input#p2");
var playerO;        //name of player 1
var playerX;        //name of player 2
var avtarXList = box1.querySelector("div.avlistX");
var avtarOList = box1.querySelector("div.avlistO");
var selectedAvtarO = randomItem(avtars);
var selectedAvtarX = randomItem(avtars);
var infoO = document.getElementById("info1");
var infoX = document.getElementById("info2");
var vsAvtarO = box2.querySelector("div.choosenAvtarO");
var vsAvtarX = box2.querySelector("div.choosenAvtarX");
var vsPlayerO = box2.querySelector("p.vspO");
var vsPlayerX = box2.querySelector("p.vspX");
var winAvtar = box3.querySelector("div.winnerAvtar");
var winnerName = box3.querySelector("p.winner");
var intro = box3.querySelector("p.winnerIntro");
var winBox = box3.querySelector("div.winnerBox");
var drwBox = box3.querySelector("div.drawbox");
var drwOavt = box3.querySelector("div.drwOavtar");
var drwXavt = box3.querySelector("div.drwXavtar");
var drwO = box3.querySelector("p.drwOname");
var drwX = box3.querySelector("p.drwXname");
var playerTurn = box2.querySelector("p.turn");
var bgm = document.querySelector("audio");
var clickTileAudio = new Audio("mixkit-modern-click-box-check-1120.wav");
var winMusic = new Audio("mixkit-medieval-show-fanfare-announcement-226.wav");
//selecting a random avtar
avtarO.style.backgroundImage = `url('${avtars[selectedAvtarO]}')`;
avtarX.style.backgroundImage = `url('${avtars[selectedAvtarX]}')`;

for(let av=0; av<avtars.length; av++) {
    let avtarO = `<div class='avList' onclick='changedO(this)' avtar-no='${av}' style='background-image: url("${avtars[av]}");'></div>`;
    avtarOList.insertAdjacentHTML("beforeend", avtarO);
    let avtarX = `<div class='avList' onclick='changedX(this)' avtar-no='${av}' style='background-image: url("${avtars[av]}");'></div>`;
    avtarXList.insertAdjacentHTML("beforeend", avtarX);
}
//making boxes to move
function getDetails() {
    box1.style.display = 'none';
    let rx = randomItem(names);
    bgm.play();
    bgm.loop = true;
    let ro = randomItem(names);
    box2.style.display = 'flex';
    playerO = inp1.value;
    playerX = inp2.value;
    if(playerO=='' || playerO==' ') {
        playerO = names[ro];    //to take a random name when user dont enter
    } else {
        playerO = playerO;  //continuing when name is entered
    }

    if(playerX=='' || playerX==' ') {
        playerX = names[rx];    //to take random name same as above
    } else {
        playerX = playerX;  //continuing when name is entered
    }
    fillVsDetails(playerO, playerX);
}

var board = document.querySelector("div.board");    //board

for(let i=0; i<9; i++) {        //to append board with tiles
    let tag = `<div class="tiles" tileNo="${i}" onclick="moved(this)">
                    <p class='playerChoice' tileTxt="${i}"></p>
                </div>`;
    board.insertAdjacentHTML("beforeend", tag);
}

let allTilesTxt = document.querySelectorAll("p.playerChoice");  //all indexes where user has clicked

function moved(e) {     //function to run when user clicked tiles
    let val = e.getAttribute("tileNo");
    clickTileAudio.play();
    if(board.classList.contains("X")) {     //player X's turn
        board.classList.add("O");
        board.classList.remove("X");
        playerTurn.innerHTML = "Player - O's Turn !";
        allTilesTxt[val].innerHTML = "X";
        allTilesTxt[val].style.color = colors[rc].p1;
        e.onclick = '';     //removing onclick event from clicked tile
        checkWinner("X");
    } else {        //player O's turn
        board.classList.add("X");
        board.classList.remove("O");
        playerTurn.innerHTML = "Player - X's Turn !";
        allTilesTxt[val].innerHTML = "O";
        allTilesTxt[val].style.color = colors[rc].p2;
        e.onclick = '';     //removing onclick event from clicked tile
        checkWinner("O");
    }
}

//function to check winner
function checkWinner(e) {        //all possible combinations for victory are here
    if(allTilesTxt[0].innerHTML == e && allTilesTxt[1].innerHTML == e && allTilesTxt[2].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[0].innerHTML == e && allTilesTxt[3].innerHTML == e && allTilesTxt[6].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[3].innerHTML == e && allTilesTxt[4].innerHTML == e && allTilesTxt[5].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[6].innerHTML == e && allTilesTxt[7].innerHTML == e && allTilesTxt[8].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[1].innerHTML == e && allTilesTxt[4].innerHTML == e && allTilesTxt[7].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[2].innerHTML == e && allTilesTxt[5].innerHTML == e && allTilesTxt[8].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[0].innerHTML == e && allTilesTxt[4].innerHTML == e && allTilesTxt[8].innerHTML == e) {
        announceWinner(e);
    } else if(allTilesTxt[2].innerHTML == e && allTilesTxt[4].innerHTML == e && allTilesTxt[6].innerHTML == e) {
        announceWinner(e);
    } else {    //if all the tiles have been checked by players and no one wins
        if(allTilesTxt[0].innerHTML !== '' && allTilesTxt[1].innerHTML !== '' && allTilesTxt[2].innerHTML !== '' && allTilesTxt[3].innerHTML !== '' && allTilesTxt[4].innerHTML !== '' && allTilesTxt[5].innerHTML !== '' && allTilesTxt[6].innerHTML !== '' && allTilesTxt[7].innerHTML !== '' && allTilesTxt[8].innerHTML !== '') {
            announceWinner("draw");     //draw
        }
    }
}

var allTiles = box2.querySelectorAll("div.tiles");
//function to announce winner
function announceWinner(e) {
    winMusic.play();
    for(let i=0; i<9; i++) {        //to empty all the function of tiles when one of the players win
        allTiles[i].onclick = '';
    }
    box2.style.display = 'none';
    box3.style.display = 'block';
    if(e=="O") {
        winBox.style.display = 'block';
        winAvtar.style.backgroundImage = `url("${avtars[selectedAvtarO]}")`;
        winnerName.innerHTML = playerO;
        intro.innerHTML = "Player O Wins !"
    } else if(e=="X") {
        winBox.style.display = 'block'
        winAvtar.style.backgroundImage = `url("${avtars[selectedAvtarX]}")`;
        winnerName.innerHTML = playerX;
        intro.innerHTML = "Player X Wins !"
    } else if(e=="draw") {
        drwBox.style.display = 'block';
        drwOavt.style.backgroundImage = `url("${avtars[selectedAvtarO]}")`;
        drwXavt.style.backgroundImage = `url("${avtars[selectedAvtarX]}")`;
        drwO.innerHTML = playerO;
        drwX.innerHTML = playerX;
    }
}

function changeAvtarO() {
    clickTileAudio.play();
    if(avtarIconO.classList.contains("closed")) {
        avtarIconO.style.display = 'flex';
        avtarIconO.classList.remove("closed");
    } else {
        avtarIconO.style.display = 'none';
        avtarIconO.classList.add("closed");
    }
}
function changeAvtarX() {
    clickTileAudio.play();
    if(avtarIconX.classList.contains("closed")) {
        avtarIconX.style.display = 'flex';
        avtarIconX.classList.remove("closed");
    } else {
        avtarIconX.style.display = 'none';
        avtarIconX.classList.add("closed");
    }
}

function changedO(t) {      //to change avtar after click on one
    clickTileAudio.play();
    let avindex = t.getAttribute("avtar-no");   //getting index of image
    selectedAvtarO = avindex;
    avtarO.style.backgroundImage = `url("${avtars[selectedAvtarO]}")`;
    changeAvtarO();     //closing avtar list
}

function changedX(t) {      //to change avtar after click on one
    clickTileAudio.play();
    let avindex = t.getAttribute("avtar-no");   //getting index of image
    selectedAvtarX = avindex;
    avtarX.style.backgroundImage = `url("${avtars[selectedAvtarX]}")`;
    changeAvtarX();     //closing avtar list
}

function randO() {
    let rand = randomItem(names);
    inp1.value = names[rand];
}

function randX() {
    let rand = randomItem(names);
    inp2.value = names[rand];
}

function fillVsDetails(o, x) {
    vsAvtarO.style.backgroundImage = `url('${avtars[selectedAvtarO]}')`;
    vsAvtarX.style.backgroundImage = `url('${avtars[selectedAvtarX]}')`;
    vsPlayerO.innerHTML = o;
    vsPlayerX.innerHTML = x;
}

function replay() {
    drwBox.style.display = 'none';
    winBox.style.display = 'none';
    box3.style.display = 'none';
    box1.style.display = 'flex';
    inp1.value = playerO;
    inp2.value = playerX;
    rc = randomItem(colors);
    winMusic.pause();
    winMusic.currentTime = 0;
    avtarIconO.style.display = 'none';
    avtarIconO.classList.add("closed");
    avtarIconX.classList.add("closed");
    avtarIconX.style.display = 'none';
    for(let i=0; i<9; i++) {
        allTiles[i].onclick = function() {moved(this)};     //setting function to empty blocks
        allTilesTxt[i].innerHTML = '';      //emptying all the p tags
    }
    board.classList.remove("X");
    board.classList.add("O");
    playerTurn.innerHTML = "Player - O's Turn !";
}