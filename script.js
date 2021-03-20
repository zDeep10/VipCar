

function aparecer1() {
    document.querySelector('.click1').classList.toggle("show")
}

function aparecer2() {
    document.querySelector('.click2').classList.toggle("show")
}

function aparecer3() {
    document.querySelector('.click3').classList.toggle("show")
}


function change() {
    document.querySelector('.bg-lista').classList.toggle("change")
    document.querySelector('.lista').classList.toggle("change")
}

// CADASTRO E LOGIN
function show () {
    document.querySelector('.formulario').classList.add("display")
    document.querySelector('.formulario2').classList.remove("display")
    document.querySelector('.bg').style.background= '#394e4bf3'
    document.querySelector('.border').style.background= 'none'
}

function show2 () {
    document.querySelector('.formulario2').classList.add("display")
    document.querySelector('.formulario').classList.remove("display")
    document.querySelector('.border').style.background= '#394e4bf3'
    document.querySelector('.bg').style.background= 'none'
}

// X
function sair () {
    document.querySelector('.formulario').classList.remove("display")
}

function sair2 () {
    document.querySelector('.formulario2').classList.remove("display")
}


function load () {
    document.querySelector('.formulario').classList.add("display")
    document.querySelector('.bg').style.background= '#394e4bf3'
}