let stoplicht = document.getElementById('stoplicht');
let stoplicht2 = document.getElementById('stoplicht2');
let stoplicht3 = document.getElementById('stoplicht3');
let stoplicht4 = document.getElementById('stoplicht4');
let stoplicht_lr = false;
let stoplicht_bb = false;
let gestart = false;

function maakRood() {
    stoplicht.src = "./images/verkeer/stoplichtrood.png";
    stoplicht2.src = "./images/verkeer/stoplichtrood2.png";
    stoplicht3.src = "./images/verkeer/stoplichtrood3.png";
    stoplicht4.src = "./images/verkeer/stoplichtrood4.png";
    stoplicht_lr = true;
    stoplicht_bb = false;
}

function maakGroen() {
    stoplicht.src = "./images/verkeer/stoplichtgroen.png";
    stoplicht2.src = "./images/verkeer/stoplichtgroen2.png";
    stoplicht3.src = "./images/verkeer/stoplichtgroen3.png";
    stoplicht4.src = "./images/verkeer/stoplichtgroen4.png";
    stoplicht_lr = false;
    stoplicht_bb = true;
}


function maakGeel() {
    stoplicht.src = "./images/verkeer/stoplichtgeel.png";
    stoplicht2.src = "./images/verkeer/stoplichtgeel2.png";
    stoplicht3.src = "./images/verkeer/stoplichtgeel3.png";
    stoplicht4.src = "./images/verkeer/stoplichtgeel4.png";
    stoplicht_lr = false;
    stoplicht_bb = false;
}

function zetUit() {
    stoplicht.src = "./images/verkeer/stoplichtuit.png";
    stoplicht2.src = "./images/verkeer/stoplichtuit2.png";
    stoplicht3.src = "./images/verkeer/stoplichtuit3.png";
    stoplicht4.src = "./images/verkeer/stoplichtuit4.png";
    stoplicht_lr = false;
    stoplicht_bb = false;
}

let werken;
let buitenwerking;
let snelheid;

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGroen, 6000);
    werken = setTimeout(maakGeel, 10000);
    werken = setTimeout(aanzetten, 12000);
}


function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}

function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
    clearTimeout();
}

let auto = document.getElementById('auto');
let auto2 = document.getElementById('auto2');
let auto3 = document.getElementById('auto3');
let auto4 = document.getElementById('auto4');
let rijden;
let rijden2;
let rijden3;
let rijden4;
auto.style.top = 800 + "px";
auto2.style.top = -250 + 'px';
auto3.style.left = -400 + 'px';
auto4.style.left = 1150 + 'px';

function superstart() {
    if (gestart === false) {
        starten();
        starten2();
        starten3();
        starten4();
        gestart = true;
    }
}

function starten() {
    rijden = setTimeout(starten, 20);
    let y_auto = parseInt(auto.style.top);
    if (parseInt(auto.style.top) < -80) {
        auto.style.top = '900px';
    }
    if (y_auto === 525 && stoplicht_lr === true) {
        snelheid = 0;
    }
    else {
        snelheid = 5;
    }

    auto.style.top = (parseInt(auto.style.top) - parseInt(snelheid)) + 'px';
}

function starten2() {
    rijden2 = setTimeout(starten2, 20);
    let l_auto = parseInt(auto2.style.top);
    if (parseInt(auto2.style.top) > 800) {
        auto2.style.top = '-350px';
    }
    if (l_auto === 200 && stoplicht_lr === true) {
        snelheid = 0;
    }
    else {
        snelheid = 5;
    }

    auto2.style.top = (parseInt(auto2.style.top) + snelheid) + 'px';

}

function starten3() {
    rijden3 = setTimeout(starten3, 20);
    let k_auto = parseInt(auto3.style.left);
    if (parseInt(auto3.style.left) > 1250) {
        auto3.style.left = '-500px';
    }
    if (k_auto === 200 && stoplicht_bb === true) {
        snelheid = 0;
    }
    else {
        snelheid = 5;
    }

    auto3.style.left = (parseInt(auto3.style.left) + 5) + 'px';
}

function starten4() {
    rijden4 = setTimeout(starten4, 20);
    let j_auto = parseInt(auto4.style.left);
    if (parseInt(auto4.style.left) === -400) {
        auto4.style.left = '1250px';
    }
    if (j_auto === 1000 && stoplicht_bb === true) {
        snelheid = 0;
    }
    else {
        snelheid = 5;
    }

    auto4.style.left = (parseInt(auto4.style.left) - 5) + 'px';

}

function opnieuw() {
    clearTimeout(rijden);
    clearTimeout(rijden2);
    clearTimeout(rijden3);
    clearTimeout(rijden4);
    auto.style.top = '800px';
    auto2.style.top = '-350px';
    auto3.style.left = '-400px';
    auto4.style.left = '1150px';
    gestart = false;
}

function stop() {
    clearTimeout(rijden);
    clearTimeout(rijden2);
    clearTimeout(rijden3);
    clearTimeout(rijden4);
    gestart = false;
}