var initArray = [];
var i = 0;
var j = 0;
var score = 0;
var userClicks = [];
var k;
var l;
var flashArray = [300, 400, 500, 600, 700, 800, 900, 1000];
// let colors = ['blue', 'red', 'pink', 'green']
var x = 0;
var colors = ['blue','pink','green'];
// var speed = 1000;
// var dots = 2;



var timesUp = false

var level = {
    dots: 2,
    round: 0,
    speed: 1000
}




function speed() {
    var k = Math.floor(Math.random() * 9)
    
    return flashArray[k];
  }
// function timer(){
//     var timesUp = true
//     console.log(timesUp)
// }

// function zeroTimer(){
//     var timesUp = false
//     console.log(timesUp)
// }

// function updateTimer(){
//     setTimeout(timer, 1000)
// }

// $(".cell").click(zeroTimer)




// function updateScore(a, b, c) {
//     score = a + b - 2
//     document.getElementById("score").innerHTML = `${score}`;
// }

function endGame() {
    alert(`You lost :( Never mind, at least you scored ${score}`)
}





// function first() {
//     level.dots = 2;
//     level.speed = 1000;
//     // return level.dots + level.speed
// }

function levelUp() {
    level.round++
    if (level.round % 3 === 0) {
level.dots++;
level.speed-=60
    }
    resetGameArray();
    resetUserClicks(nextRound);
        
    return level.dots + level.round + level.speed
}

function resetGameArray() {
    initArray = [];
    return initArray;
}

function resetUserClicks(callback) {
    userClicks = [];
    // nextRound()
    callback();
    return userClicks;
}



function makeCircleArray(level) {
    var i = 0;
  do {
    var val = Math.floor(Math.random() * 9)
    initArray.push(`game-${val}`)
    i++
  }
  while (i < level.dots)
  console.log(`${initArray}`)
  return initArray;
}



      



function showCircle(num, j) {
    let y = x
    x++;
  setTimeout(function () {
    var color = colors[y % colors.length];
    var num = initArray[j];
    var element = document.getElementById(num)
    element.classList.add(`cell-glow-${color}`)
    window.setTimeout(function () {
      element.classList.remove(`cell-glow-${color}`)
    }, 400);
    j++;
  }, speed() * j);
};

function showEachCircle(captureUserClicks) {
    let x = 0;
  initArray.forEach(showCircle, x++);
  }


function captureUserClicks(clicked_id, callback) {
    userClicks.push(`game-${clicked_id}`);
    
  if (userClicks.length === initArray.length) {
  compareArraysClicks();
}
}

function compareArraysClicks() {
    console.log(userClicks)
 var userArray = userClicks.toString();
  var gameArray = initArray.toString();
  if (gameArray === userArray) {
    // updateScore(level.dots, level.round, score);
    levelUp()
  } else if (timesUp == true){
      endGame()
  } else {
//   updateScore(level.dots, level.round, score);
  endGame();
}
}



// (userClicks.length === initArray.length && gameArray !== userArray) 

function startGame() {
    const firstLevel = makeCircleArray(level)
    showEachCircle(firstLevel, captureUserClicks)
}

function nextRound(){
    // changeColor(dots);
    setTimeout(function() {
    const whichLevel = makeCircleArray(level);
 showEachCircle(whichLevel, captureUserClicks)}
  ,1000)};






