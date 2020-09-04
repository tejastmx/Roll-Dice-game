var imageArray = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

var playerImg = document.getElementById("ig");
var playerImgg = document.getElementById("ig2");
var score = document.getElementById("score");
var box1 = document.getElementById("id1");
var box2 = document.getElementById("id2");
var box3 = document.getElementById("id3");
var box4 = document.getElementById("id4");
var box5 = document.getElementById("id5");
var box6 = document.getElementById("id6");
var box7 = document.getElementById("id7");
var box8 = document.getElementById("id8");
var box9 = document.getElementById("id9");
var box10 = document.getElementById("id10");
var box11 = document.getElementById("id11");
var box12 = document.getElementById("id12");
var box13 = document.getElementById("id13");
var box14 = document.getElementById("id14");
var box15 = document.getElementById("id15");
var box16 = document.getElementById("id16");
var box17 = document.getElementById("id17");
var box18 = document.getElementById("id18");
var box19 = document.getElementById("id19");
var box20 = document.getElementById("id20");
var box21 = document.getElementById("id21");
var box22 = document.getElementById("id22");
var box23 = document.getElementById("id23");
var box24 = document.getElementById("id24");
var box25 = document.getElementById("id25");
var box26 = document.getElementById("id26");
var box27 = document.getElementById("id27");
var box28 = document.getElementById("id28");
var box29 = document.getElementById("id29");
var box30 = document.getElementById("id30");
var box31 = document.getElementById("id31");
var box32 = document.getElementById("id32");
var box33 = document.getElementById("id33");
var box34 = document.getElementById("id34");
var box35 = document.getElementById("id35");
var box36 = document.getElementById("id36");
var box37 = document.getElementById("id37");
var box38 = document.getElementById("id38");
var box39 = document.getElementById("id39");
var box40 = document.getElementById("id40");
var box41 = document.getElementById("id41");
var box42 = document.getElementById("id42");
var box43 = document.getElementById("id43");
var box44 = document.getElementById("id44");
var box45 = document.getElementById("id45");
var box46 = document.getElementById("id46");
var box47 = document.getElementById("id47");
var box48 = document.getElementById("id48");
var box49 = document.getElementById("id49");
var box50 = document.getElementById("id50");

////-------grid-array------------------------
var arrdiv = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15,
  box16,
  box17,
  box18,
  box19,
  box20,
  box21,
  box22,
  box23,
  box24,
  box25,
  box26,
  box27,
  box28,
  box29,
  box30,
  box31,
  box32,
  box33,
  box34,
  box35,
  box36,
  box37,
  box38,
  box39,
  box40,
  box41,
  box42,
  box43,
  box44,
  box45,
  box46,
  box47,
  box48,
  box49,
  box50,
];

var count = 0; //score of player-1
var count1 = 0; //score of player-2
var position1 = 0;
var position = 0;

document.getElementById("start-btn").disabled = true;
document.getElementById("btn").disabled = true;
document.getElementById("btn1").disabled = true;

//------------PROMPT----------------------------------
var name = prompt("Enter player-1 name");
document.getElementById("player-1").innerHTML = name;
var name2 = prompt("Enter player-2 name");
document.getElementById("player-2").innerHTML = name2;

//----------AUDIO------------------------------------------
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function negative() {
  var n = document.getElementById("wrong");
  n.play();
}
//-----------PLAYER-1------------------------------
var imgindex = 0;
var button = document
  .getElementById("btn")
  .addEventListener("click", functionT);

function functionT() {
  {
    // document.getElementById("btn").disabled = true;
    imgindex = Math.floor(Math.random() * 6);
    playerImg.setAttribute("src", imageArray[imgindex]);
    play();

    document.getElementById("start-btn").disabled = true;

    ///------update-score---------------------------
    if (imgindex == 0) {
      count += 1;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (imgindex == 1) {
      count += 2;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (imgindex == 2) {
      count += 3;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (imgindex == 3) {
      count += 4;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (imgindex == 4) {
      count += 5;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (imgindex == 5) {
      count += 6;
      document.getElementById("score").textContent = "score:" + count;
    }
    if (count >= 50) {
      alert("player1 wins the game");
      document.getElementById("score").textContent = "score:" + 0;
      count = 0;
      count1 = 0;
      document.getElementById("score1").textContent = "score:" + 0;
      document.getElementById("start-btn").disabled = false;
      document.getElementById("timer").innerHTML = "60 secs";
      document.getElementById("btn").disabled = true;
      document.getElementById("btn1").disabled = true;
      end();
      seconds = 60;

    }

    ///-----moving player-1 on grid-------------------------------

    var i = document.getElementById("img1");

    if (count > 0) {
      position = count - 1;
      arrdiv[
        position
      ].innerHTML = `<img src ="p1.png" id ="img1" height="50px" width ="50px">`;
      i.remove();
    }

    if (count == 15) {
      negative();

      count -= 5;
    }
    if (count == 37) {
      negative();

      count -= 5;
    }
    if (count == 22) {
      negative();
      count += 5;
    }
    if (count == 40) {
      negative();
      count += 5;
    }
  }
}

//---------------PLAYER-2----------------------------------------
var button1 = document
  .getElementById("btn1")
  .addEventListener("click", functionD);

function functionD() {
  document.getElementById("btn").disabled = true;
  var igindex = Math.floor(Math.random() * 6);
  playerImgg.setAttribute("src", imageArray[igindex]);
  play();


  ///------update-score---------------------------
  if (igindex == 0) {
    count1 += 1;
    document.getElementById("score1").textContent = "score:" + count1;
  }
  if (igindex == 1) {
    count1 += 2;
    document.getElementById("score1").textContent = "score:" + count1;
  }
  if (igindex == 2) {
    count1 += 3;
    document.getElementById("score1").textContent = "score:" + count1;
  }
  if (igindex == 3) {
    count1 += 4;
    document.getElementById("score1").textContent = "score:" + count1;
  }
  if (igindex == 4) {
    count1 += 5;
    document.getElementById("score1").textContent = "score:" + count1;
  }
  if (igindex == 5) {
    count1 += 6;
    document.getElementById("score1").textContent = "score:" + count1;
  }

  if (count1 >= 50) {
    alert("player2 wins the game");
    document.getElementById("score1").textContent = "score:" + 0;
    count1 = 0;
    count = 0;
    document.getElementById("score").textContent = "score:" + 0;
    document.getElementById("start-btn").disabled = false;
    document.getElementById("timer").innerHTML = "60 secs";
    document.getElementById("btn").disabled = true;
    document.getElementById("btn1").disabled = true;
    end();
    seconds = 60;

  }

  ///-----moving player-2 on grid-------------------------------

  var k = document.getElementById("img2");

  if (count1 > 0) {
    position1 = count1 - 1;
    arrdiv[
      position1
    ].innerHTML = `<img src ="p2.png" id ="img2" height="50px" width ="50px">`;
    k.remove();
  }
  if (count1 == 15) {
    negative();
    count1 -= 5;
  }
  if (count1 == 37) {
    negative();
    count1 -= 5;
  }
  if (count1 == 22) {
    negative();
    count1 += 5;
  }
  if (count1 == 40) {
    negative();
    s
    count1 += 5;
  }
}
//------------TIMER-----------------------------------------

var seconds = 60;
var id = 0;
document.getElementById("start-btn").addEventListener("click", timer);

function timer() {
  id = setInterval(change, 1000);
}

function change() {
  document.getElementById("btn").disabled = false;
  document.getElementById("btn1").disabled = false;
  document.getElementById("start-btn").disabled = true;
  document.getElementById("timer").innerHTML = seconds + "secs";
  seconds--;
  if (seconds === 0) {
    if (count > count1) {
      alert("PLAYER-1 WINS");
      document.getElementById("score1").textContent = "score:" + 0;
      count1 = 0;
      count = 0;
      document.getElementById("score").textContent = "score:" + 0;
      document.getElementById("start-btn").disabled = false;
      document.getElementById("btn").disabled = true;
      document.getElementById("btn1").disabled = true;
      end();
      seconds = 60;
      arrdiv[count] = 0;
      arrdiv[count1] = 0;
    } else {
      alert("PLAYER-2 WINS");
      document.getElementById("score1").textContent = "score:" + 0;
      count1 = 0;
      count = 0;
      document.getElementById("score").textContent = "score:" + 0;
      document.getElementById("start-btn").disabled = false;
      document.getElementById("btn").disabled = true;
      document.getElementById("btn1").disabled = true;
      end();
      seconds = 60;
      arrdiv[count] = 0;
      arrdiv[count1] = 0;
    }
  }
}

function end() {
  clearInterval(id);
}
///------------------POP-UP----------------------

document.getElementById("popup").addEventListener("click", function () {
  document.getElementById("popup-1").classList.toggle("active");
});

document.getElementById("close-btn").addEventListener("click", function () {
  // document.getElementById("popup-1").classList.hide("active");
  document.getElementById("popup-1").style.display = "none";
  document.getElementById("popup").style.display = "none";
  document.getElementById("start-btn").disabled = false;
});