// PRODUTOS
function aparecer1() {
    document.querySelector('.click1').classList.toggle("show")
}

function aparecer2() {
    document.querySelector('.click2').classList.toggle("show")
}

function aparecer3() {
    document.querySelector('.click3').classList.toggle("show")
}

// HAMBURGUER
function alterar() {
    document.querySelector('.bg-lista').classList.toggle("change")
    document.querySelector('.lista').classList.toggle("change")
}

document.querySelector('body').addEventListener('load', () => {

})

// CADASTRO E LOGIN
function show() {
    document.querySelector('.formulario').classList.add("display")
    document.querySelector('.formulario2').classList.remove("display")
    document.querySelector('.bg').style.background = '#394e4bf3'
    document.querySelector('.border').style.background = 'none'

    document.querySelector('.espacamento').classList.remove("centro")
}

function show2() {
    document.querySelector('.formulario2').classList.add("display")
    document.querySelector('.formulario').classList.remove("display")
    document.querySelector('.border').style.background = '#394e4bf3'
    document.querySelector('.bg').style.background = 'none'

    document.querySelector('.espacamento').classList.remove("centro")
}

// X
function sair() {
    document.querySelector('.formulario').classList.remove("display")
    document.querySelector('.espacamento').classList.add("centro")
}

function sair2() {
    document.querySelector('.formulario2').classList.remove("display")
    document.querySelector('.espacamento').classList.add("centro")
}


function load() {
    document.querySelector('.formulario').classList.add("display")
    document.querySelector('.bg').style.background = '#394e4bf3'
}

