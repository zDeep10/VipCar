document.querySelector('.click').addEventListener('click', aparecer)
document.querySelector('.click2').addEventListener('click', aparecer2)
document.querySelector('.click3').addEventListener('click', aparecer3)

function aparecer() {
    document.querySelector('div.fadein1').style.opacity = '1'
}

function aparecer2() {
    document.querySelector('div.fadein2').style.opacity = '1'
}

function aparecer3() {
    document.querySelector('div.fadein3').style.opacity = '1'
}



function change() {
    document.querySelector('.bg-lista').classList.toggle("change")
    document.querySelector('.lista').classList.toggle("change")
}