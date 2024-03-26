let ic11 = '', ic12 = '', ic13 = '', ic21 = '', ic22 = '', ic23 = '', ic31 = '', ic32 = '', ic33 = '';

let userWin = false;

let position = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let count = 0;

document.getElementById("box1").addEventListener("click", mark1);
document.getElementById("box2").addEventListener("click", mark2);
document.getElementById("box3").addEventListener("click", mark3);
document.getElementById("box4").addEventListener("click", mark4);
document.getElementById("box5").addEventListener("click", mark5);
document.getElementById("box6").addEventListener("click", mark6);
document.getElementById("box7").addEventListener("click", mark7);
document.getElementById("box8").addEventListener("click", mark8);
document.getElementById("box9").addEventListener("click", mark9);

function computerMove() {
    if (userWin == false) {
        var targetPositionIndex = Math.floor(Math.random() * position.length);
        var targetPosition = position[targetPositionIndex];
        position.splice(targetPositionIndex, 1);
        switch (targetPosition) {
            case 1:
                computerMark1();
                break;
            case 2:
                computerMark2();
                break;
            case 3:
                computerMark3();
                break;
            case 4:
                computerMark4();
                break;
            case 5:
                computerMark5();
                break;
            case 6:
                computerMark6();
                break;
            case 7:
                computerMark7();
                break;
            case 8:
                computerMark8();
                break;
            case 9:
                computerMark9();
                break;
            default:
                break;
        }
    }
}

function computerMark1() {
    document.getElementById(`box1`).innerHTML = `<img id="img1" class="image" src="" alt=""></img>`;
    document.getElementById(`img1`).src = "circle.png";
    ic11 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box1").removeEventListener("click", mark1);
}

function computerMark2() {
    document.getElementById(`box2`).innerHTML = `<img id="img2" class="image" src="" alt=""></img>`;
    document.getElementById(`img2`).src = "circle.png";
    ic12 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box2").removeEventListener("click", mark2);
}

function computerMark3() {
    document.getElementById(`box3`).innerHTML = `<img id="img3" class="image" src="" alt=""></img>`;
    document.getElementById(`img3`).src = "circle.png";
    ic13 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box3").removeEventListener("click", mark3);
}

function computerMark4() {
    document.getElementById(`box4`).innerHTML = `<img id="img4" class="image" src="" alt=""></img>`;
    document.getElementById(`img4`).src = "circle.png";
    ic21 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box4").removeEventListener("click", mark4);
}

function computerMark5() {
    document.getElementById(`box5`).innerHTML = `<img id="img5" class="image" src="" alt=""></img>`;
    document.getElementById(`img5`).src = "circle.png";
    ic22 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box5").removeEventListener("click", mark5);
}

function computerMark6() {
    document.getElementById(`box6`).innerHTML = `<img id="img6" class="image" src="" alt=""></img>`;
    document.getElementById(`img6`).src = "circle.png";
    ic23 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box6").removeEventListener("click", mark6);
}

function computerMark7() {
    document.getElementById(`box7`).innerHTML = `<img id="img7" class="image" src="" alt=""></img>`;
    document.getElementById(`img7`).src = "circle.png";
    ic31 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box7").removeEventListener("click", mark7);
}

function computerMark8() {
    document.getElementById(`box8`).innerHTML = `<img id="img8" class="image" src="" alt=""></img>`;
    document.getElementById(`img8`).src = "circle.png";
    ic32 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box8").removeEventListener("click", mark8);
}

function computerMark9() {
    document.getElementById(`box9`).innerHTML = `<img id="img9" class="image" src="" alt=""></img>`;
    document.getElementById(`img9`).src = "circle.png";
    ic33 = 'ci';
    addCount()
    checkWin();
    computerWin();
    document.getElementById("box9").removeEventListener("click", mark9);
}

function mark1() {
    document.getElementById("box1").innerHTML = `<img id="img1" class="image" src="" alt=""></img>`;
    document.getElementById("img1").src = "cross.png";
    ic11 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 1) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box1").removeEventListener("click", mark1);
}

function mark2() {
    document.getElementById("box2").innerHTML = `<img id="img2" class="image" src="" alt=""></img>`;
    document.getElementById("img2").src = "cross.png";
    ic12 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 2) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box2").removeEventListener("click", mark2);
}

function mark3() {
    document.getElementById("box3").innerHTML = `<img id="img3" class="image" src="" alt=""></img>`;
    document.getElementById("img3").src = "cross.png";
    ic13 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 3) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box3").removeEventListener("click", mark3);
}

function mark4() {
    document.getElementById("box4").innerHTML = `<img id="img4" class="image" src="" alt=""></img>`;
    document.getElementById("img4").src = "cross.png";
    ic21 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 4) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box4").removeEventListener("click", mark4);
}

function mark5() {
    document.getElementById("box5").innerHTML = `<img id="img5" class="image" src="" alt=""></img>`;
    document.getElementById("img5").src = "cross.png";
    ic22 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 5) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box5").removeEventListener("click", mark5);
}

function mark6() {
    document.getElementById("box6").innerHTML = `<img id="img6" class="image" src="" alt=""></img>`;
    document.getElementById("img6").src = "cross.png";
    ic23 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 6) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box6").removeEventListener("click", mark6);
}

function mark7() {
    document.getElementById("box7").innerHTML = `<img id="img7" class="image" src="" alt=""></img>`;
    document.getElementById("img7").src = "cross.png";
    ic31 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 7) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box7").removeEventListener("click", mark7);
}

function mark8() {
    document.getElementById("box8").innerHTML = `<img id="img8" class="image" src="" alt=""></img>`;
    document.getElementById("img8").src = "cross.png";
    ic32 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 8) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box8").removeEventListener("click", mark8);
}

function mark9() {
    document.getElementById("box9").innerHTML = `<img id="img9" class="image" src="" alt=""></img>`;
    document.getElementById("img9").src = "cross.png";
    ic33 = 'cr';
    for (let i = 0; i < position.length; i++) {
        if (position[i] === 9) {
            position.splice(i, 1);
            break;
        }
    }
    addCount()
    checkWin();
    computerMove();
    computerWin();
    document.getElementById("box9").removeEventListener("click", mark9);
}

function dropEventListerner() {
    document.getElementById("box1").removeEventListener("click", mark1);
    document.getElementById("box2").removeEventListener("click", mark2);
    document.getElementById("box3").removeEventListener("click", mark3);
    document.getElementById("box4").removeEventListener("click", mark4);
    document.getElementById("box5").removeEventListener("click", mark5);
    document.getElementById("box6").removeEventListener("click", mark6);
    document.getElementById("box7").removeEventListener("click", mark7);
    document.getElementById("box8").removeEventListener("click", mark8);
    document.getElementById("box9").removeEventListener("click", mark9);
}

function addCount() {
    count = count + 1;

    if (count == 9) {
        document.getElementById("winnerName").innerHTML = `Game Tie`;
    }
}


function checkWin() {
    if (
        (ic21 == 'cr' && ic22 == 'cr' && ic23 == 'cr') ||
        (ic11 == 'cr' && ic12 == 'cr' && ic13 == 'cr') ||
        (ic31 == 'cr' && ic32 == 'cr' && ic33 == 'cr') ||
        (ic11 == 'cr' && ic21 == 'cr' && ic31 == 'cr') ||
        (ic12 == 'cr' && ic22 == 'cr' && ic32 == 'cr') ||
        (ic13 == 'cr' && ic23 == 'cr' && ic33 == 'cr') ||
        (ic11 == 'cr' && ic22 == 'cr' && ic33 == 'cr') ||
        (ic13 == 'cr' && ic22 == 'cr' && ic31 == 'cr')
    ) {
        userWin = true;
        dropEventListerner();
        document.getElementById("winnerName").innerHTML = `User Win Game`;
    }
}

function computerWin() {
    if (
        (ic11 == 'ci' && ic12 == 'ci' && ic13 == 'ci') ||
        (ic21 == 'ci' && ic22 == 'ci' && ic23 == 'ci') ||
        (ic31 == 'ci' && ic32 == 'ci' && ic33 == 'ci') ||
        (ic11 == 'ci' && ic21 == 'ci' && ic31 == 'ci') ||
        (ic12 == 'ci' && ic22 == 'ci' && ic32 == 'ci') ||
        (ic13 == 'ci' && ic23 == 'ci' && ic33 == 'ci') ||
        (ic11 == 'ci' && ic22 == 'ci' && ic33 == 'ci') ||
        (ic13 == 'ci' && ic22 == 'ci' && ic31 == 'ci')
    ) {
        dropEventListerner();
        document.getElementById("winnerName").innerHTML = `Computer Win Game`;
    }
}
