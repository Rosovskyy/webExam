let values = [], cells = [];

function start() {
    values.fill(0);
    nextPlay();
    nextPlay();
}

function nextPlay() {
    let tmp = [];
    values.map((el, ind) => el === 0 ? tmp.push(ind) : null);
    values[tmp[Math.floor(Math.random() * tmp.length)]] = (Math.floor(Math.random() * 2) + 1) * 2;
    for (let i = 0; i < values.length; i++) {
        if (parseInt(cells[i].getAttribute("value")) !== values[i]) {
            cells[i].setAttribute("value", values[i]);
            cells[i].classList.remove('anim');
            cells[i].classList.add('anim');
        }
    }

    if (tmp.length > 1) return;
    // return null ? tmp.length > 1 : console.log("not greater than 1");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++)
            if ((values[i * 4 + j] === values[i * 4 + j + 1]) || (values[i + 4 * j] === values[i + 4 * j + 4])) {
                return;
            }
    }
    alert("Game over");
}

function needToMove(indexes) {
    let i = 0;
    for (; i < indexes.length - 1; i++)
        if (values[indexes[i]] === 0) {
            for (; i < indexes.length; i++)
                if (values[indexes[i]] !== 0)
                    return true;
        } else if (values[indexes[i]] === values[indexes[i + 1]])
            return true;
    return false;
}

function move(indexes) {
    if (!needToMove(indexes)) return false;
    moveZeros(indexes);
    for (let i = 0; i < indexes.length - 1; i++) {
        if (values[indexes[i]] === values[indexes[i + 1]]) {
            values[indexes[i]] *= 2;
            values[indexes[i + 1]] = 0;
        }
    }
    moveZeros(indexes);
    return true;
}

function moveZeros(indexes) {
    let tmp = [];
    for (let i = 0; i < indexes.length; i++) {
        if (values[indexes[i]] !== 0) tmp.push(values[indexes[i]]);
    }
    for (let i = 0; tmp.length !== indexes.length; i++) {
        tmp.push(0);
    }
    for (let i = 0; i < tmp.length; i++){
        values[indexes[i]] = tmp[i];
    }
}

function onkeyup(event) {
    let tmp = false;
    switch (event.keyCode) {
        case 37:
            for (let i = 0; i < 4; i++)
                tmp = (move([i * 4, i * 4 + 1, i * 4 + 2, i * 4 + 3]) || tmp);
            break;
        case 38:
            for (let i = 0; i < 4; i++)
                tmp = (move([i, i + 4, i + 8, i + 12]) || tmp);
            break;
        case 39:
            for (let i = 0; i < 4; i++)
                tmp = (move([i * 4 + 3, i * 4 + 2, i * 4 + 1, i * 4]) || tmp);
            break;
        case 40:
            for (let i = 0; i < 4; i++)
                tmp = (move([i + 12, i + 8, i + 4, i]) || tmp);
            break;
    }
    if (tmp) nextPlay();
}

(function () {
    for (let i = 0; i < 16; i++) values.push(0);
    cells = document.querySelectorAll('.cell');
    document.onkeyup = onkeyup;
    start();
})();